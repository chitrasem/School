$(function() {

    var Grid = jsGrid.Grid,

        JSGRID = "JSGrid",
        JSGRID_DATA_KEY = JSGRID;

    Grid.prototype.updateOnResize = false;

    module("basic");

    test("default creation", function() {
        var gridOptions = {
                simpleOption: "test",
                complexOption: {
                    a: "subtest",
                    b: 1,
                    c: {}
                }
            },

            grid = new Grid("#jsGrid", gridOptions);

        equal(grid._container[0], $("#jsGrid")[0], "container saved");
        equal(grid.simpleOption, "test", "primitive option extended");
        equal(grid.complexOption, gridOptions.complexOption, "non-primitive option extended");
    });

    test("jquery adapter creation", function() {
        var gridOptions = {
                option: "test"
            },
            $element = $("#jsGrid"),
            result = $element.jsGrid(gridOptions),
            grid = $element.data(JSGRID_DATA_KEY);

        equal(result, $element, "jquery fn returned source jQueryElement");
        ok(grid instanceof Grid, "jsGrid saved to jquery data");
        equal(grid.option, "test", "options provided");
    });

    test("destroy", function() {
        var $element = $("#jsGrid"),
            grid;

        $element.jsGrid({});
        grid = $element.data(JSGRID_DATA_KEY);

        grid.destroy();

        strictEqual($element.html(), "", "content is removed");
        strictEqual($element.data(JSGRID_DATA_KEY), undefined, "jquery data is removed");
    });

    test("jquery adapter second call changes option value", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                option: "test"
            },
            grid;

        $element.jsGrid(gridOptions);
        grid = $element.data(JSGRID_DATA_KEY);

        gridOptions.option = "new test";
        $element.jsGrid(gridOptions);

        equal(grid, $element.data(JSGRID_DATA_KEY), "instance was not changed");
        equal(grid.option, "new test", "option changed");
    });

    test("jquery adapter invokes jsGrid method", function() {
        var methodResult = "",
            $element = $("#jsGrid"),
            gridOptions = {
                method: function(str) {
                    methodResult = "test_" + str;
                }
            };

        $element.jsGrid(gridOptions);
        $element.jsGrid("method", "invoke");

        equal(methodResult, "test_invoke", "method invoked");
    });

    test("controller methods are $.noop when not specified", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                controller: {}
            },
            testOption;

        $element.jsGrid(gridOptions);

        deepEqual($element.data(JSGRID_DATA_KEY)._controller, {
            loadData: $.noop,
            insertItem: $.noop,
            updateItem: $.noop,
            deleteItem: $.noop
        }, "controller has stub methods");
    });

    test("option method", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                test: "value"
            },
            testOption;

        $element.jsGrid(gridOptions);

        testOption = $element.jsGrid("option", "test");
        equal(testOption, "value", "read option value");

        $element.jsGrid("option", "test", "new_value");
        testOption = $element.jsGrid("option", "test");
        equal(testOption, "new_value", "set option value");
    });

    test("option changing event handlers", function() {
        var $element = $("#jsGrid"),
            optionChangingEventArgs,
            optionChangedEventArgs,

            gridOptions = {
                test: "testValue",
                another: "anotherValue",
                onOptionChanging: function(e) {
                    optionChangingEventArgs = $.extend({}, e);

                    e.option = "another";
                    e.newValue = e.newValue + "_" + this.another;
                },
                onOptionChanged: function(e) {
                    optionChangedEventArgs = $.extend({}, e);
                }
            },
            anotherOption;

        $element.jsGrid(gridOptions);

        $element.jsGrid("option", "test", "newTestValue");
        equal(optionChangingEventArgs.option, "test", "option name is provided in args of optionChanging");
        equal(optionChangingEventArgs.oldValue, "testValue", "old option value is provided in args of optionChanging");
        equal(optionChangingEventArgs.newValue, "newTestValue", "new option value is provided in args of optionChanging");

        anotherOption = $element.jsGrid("option", "another");
        equal(anotherOption, "newTestValue_anotherValue", "option changing handler changed option and value");

        equal(optionChangedEventArgs.option, "another", "option name is provided in args of optionChanged");
        equal(optionChangedEventArgs.value, "newTestValue_anotherValue", "option value is provided in args of optionChanged");
    });

    test("common layout rendering", function() {
        var $element = $("#jsGrid"),
            grid = new Grid($element, {}),
            $headerGrid,
            $headerGridTable,
            $bodyGrid,
            $bodyGridTable;

        ok($element.hasClass(grid.containerClass), "container class attached");
        ok($element.children().eq(0).hasClass(grid.gridHeaderClass), "grid header");
        ok($element.children().eq(1).hasClass(grid.gridBodyClass), "grid body");
        ok($element.children().eq(2).hasClass(grid.pagerContainerClass), "pager container");

        $headerGrid = $element.children().eq(0);
        $headerGridTable = $headerGrid.children().first();
        ok($headerGridTable.hasClass(grid.tableClass), "header table");
        equal($headerGrid.find("." + grid.headerRowClass).length, 1, "header row");
        equal($headerGrid.find("." + grid.filterRowClass).length, 1, "filter row");
        equal($headerGrid.find("." + grid.insertRowClass).length, 1, "insert row");
        ok(grid._headerRow.hasClass(grid.headerRowClass), "header row class");
        ok(grid._filterRow.hasClass(grid.filterRowClass), "filter row class");
        ok(grid._insertRow.hasClass(grid.insertRowClass), "insert row class");

        $bodyGrid = $element.children().eq(1);
        $bodyGridTable = $bodyGrid.children().first();
        ok($bodyGridTable.hasClass(grid.tableClass), "body table");
        equal(grid._content.parent()[0], $bodyGridTable[0], "content is tbody in body table");
        equal($bodyGridTable.find("." + grid.noDataRowClass).length, 1, "no data row");
        equal($bodyGridTable.text(), grid.noDataContent, "no data text");
    });

    test("set default options with setDefaults", function() {
        jsGrid.setDefaults({
            defaultOption: "test"
        });

        var $element = $("#jsGrid").jsGrid({});

        equal($element.jsGrid("option", "defaultOption"), "test", "default option set");
    });


    module("loading");

    test("loading with controller", function() {
        var $element = $("#jsGrid"),
            data = [
                { test: "test1" },
                { test: "test2" }
            ],

            gridOptions = {
                controller: {
                    loadData: function() {
                        return data;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.loadData();

        equal(grid.option("data"), data, "loadData loads data");
    });

    test("loadData throws exception when controller method not found", function() {
        var $element = $("#jsGrid");
        var grid = new Grid($element);
        grid._controller = {};

        throws(function() {
            grid.loadData();
        }, /loadData/, "loadData threw an exception");
    });

    test("onError event should be fired on controller fail", function() {
        var errorArgs,
            errorFired = 0,
            $element = $("#jsGrid"),

            gridOptions = {
                controller: {
                    loadData: function() {
                        return $.Deferred().reject({ value: 1 }, "test").promise();
                    }
                },
                onError: function(args) {
                    errorFired++;
                    errorArgs = args;
                }
            },

            grid = new Grid($element, gridOptions);

        grid.loadData();

        equal(errorFired, 1, "onError handler fired");
        deepEqual(errorArgs, { grid: grid, args: [{ value: 1 }, "test"] }, "error has correct params");
    });

    asyncTest("autoload should call loadData after render", 1, function() {
        new Grid($("#jsGrid"), {
            autoload: true,
            controller: {
                loadData: function() {
                    ok(true, "autoload calls loadData on creation");
                    start();
                    return [];
                }
            }
        });
    });

    test("loading filtered data", function() {
        var filteredData,
            loadingArgs,
            loadedArgs,
            $element = $("#jsGrid"),
            data = [
                { field: "test" },
                { field: "test_another" },
                { field: "test_another" },
                { field: "test" }
            ],

            gridOptions = {
                filtering: true,
                fields: [
                    {
                        name: "field",
                        filterValue: function(value) {
                            return "test";
                        }
                    }
                ],
                onDataLoading: function(e) {
                    loadingArgs = $.extend(true, {}, e);
                },
                onDataLoaded: function(e) {
                    loadedArgs = $.extend(true, {}, e);
                },
                controller: {
                    loadData: function(filter) {
                        filteredData = $.grep(data, function(item) {
                            return item.field === filter.field;
                        });
                        return filteredData;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.loadData();

        equal(loadingArgs.filter.field, "test");
        equal(grid.option("data").length, 2, "filtered data loaded");
        deepEqual(loadedArgs.data, filteredData);
    });

    asyncTest("loading indication", function() {
        var timeout = 10,
            stage = "initial",
            $element = $("#jsGrid"),

            gridOptions = {
                loadIndication: true,
                loadIndicationDelay: timeout,
                loadMessage: "loading...",

                loadIndicator: function(config) {
                    equal(config.message, gridOptions.loadMessage, "message provided");
                    ok(config.container.jquery, "grid container is provided");

                    return {
                        show: function() {
                            stage = "started";
                        },
                        hide: function() {
                            stage = "finished";
                        }
                    };
                },

                fields: [
                    { name: "field" }
                ],

                controller: {
                    loadData: function() {
                        var deferred = $.Deferred();

                        equal(stage, "initial", "initial stage");

                        setTimeout(function() {
                            equal(stage, "started", "loading started");

                            deferred.resolve([]);
                            equal(stage, "finished", "loading finished");

                            start();
                        }, timeout);

                        return deferred.promise();
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.loadData();
    });

    test("search", function() {
        var $element = $("#jsGrid"),
            data = [
                { field: "test" },
                { field: "test_another" },
                { field: "test_another" },
                { field: "test" }
            ],

            gridOptions = {
                pageIndex: 2,
                _sortField: "field",
                _sortOrder: "desc",
                filtering: true,
                fields: [
                    {
                        name: "field",
                        filterValue: function(value) {
                            return "test";
                        }
                    }
                ],
                controller: {
                    loadData: function(filter) {
                        var filteredData = $.grep(data, function(item) {
                            return item.field === filter.field;
                        });
                        return filteredData;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.search();
        equal(grid.option("data").length, 2, "data filtered");
        strictEqual(grid.option("pageIndex"), 1, "pageIndex reset");
        strictEqual(grid._sortField, null, "sortField reset");
        strictEqual(grid._sortOrder, "asc", "sortOrder reset");
    });


    module("filtering");

    test("filter rendering", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                filtering: true,
                fields: [
                    {
                        name: "test",
                        filtercss: "filter-class",
                        filterTemplate: function() {
                            var result = this.filterControl = $("<input>").attr("type", "text").addClass("filter-input");
                            return result;
                        }
                    }
                ]
            },
            grid = new Grid($element, gridOptions);

        equal(grid._filterRow.find(".filter-class").length, 1, "filtercss class is attached");
        equal(grid._filterRow.find(".filter-input").length, 1, "filter control rendered");
        ok(grid.fields[0].filterControl.is("input[type=text]"), "filter control saved in field");
    });

    test("filter get/clear", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                filtering: true,
                controller: {
                    loadData: function() {
                        return [];
                    }
                },
                fields: [
                    {
                        name: "field",
                        filterTemplate: function() {
                            return this.filterControl = $("<input>").attr("type", "text");
                        },
                        filterValue: function() {
                            return this.filterControl.val();
                        }
                    }
                ]
            },
            grid = new Grid($element, gridOptions);

        grid.fields[0].filterControl.val("test");
        deepEqual(grid.getFilter(), { field: "test" }, "get filter");

        grid.clearFilter();
        deepEqual(grid.getFilter(), { field: "" }, "filter cleared");
        equal(grid.fields[0].filterControl.val(), "", "grid field filterControl cleared");
    });

    test("field without filtering", function() {
        var $element = $("#jsGrid"),
            jsGridFieldConfig = {
                filterTemplate: function() {
                    var result = this.filterControl = $("<input>").attr("type", "text");
                    return result;
                },
                filterValue: function(value) {
                    if(!arguments.length) {
                        return this.filterControl.val();
                    }
                    this.filterControl.val(value);
                }
            },

            gridOptions = {
                filtering: true,
                fields: [
                    $.extend({}, jsGridFieldConfig, {
                        name: "field1",
                        filtering: false
                    }),
                    $.extend({}, jsGridFieldConfig, {
                        name: "field2"
                    })
                ]
            },

            grid = new Grid($element, gridOptions);

        grid.fields[0].filterControl.val("test1");
        grid.fields[1].filterControl.val("test2");
        deepEqual(grid.getFilter(), { field2: "test2" }, "field with filtering=false is not included in filter");
    });

    test("search with filter", function() {
        var $element = $("#jsGrid"),
            data = [
                { field: "test" },
                { field: "test_another" },
                { field: "test_another" },
                { field: "test" }
            ],

            gridOptions = {
                fields: [
                    {
                        name: "field"
                    }
                ],
                controller: {
                    loadData: function(filter) {
                        var filteredData = $.grep(data, function(item) {
                            return item.field === filter.field;
                        });
                        return filteredData;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.search({ field: "test" });
        equal(grid.option("data").length, 2, "data filtered");
    });

    test("filtering with static data should not do actual filtering", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                filtering: true,
                fields: [
                    { type: "text", name: "field" }
                ],
                data: [
                    { name: "value1" },
                    { name: "value2" }
                ]
            },
            grid = new Grid($element, gridOptions);

        grid._filterRow.find("input").val("1");

        grid.search();
        equal(grid.option("data").length, 2, "data is not filtered");
    });


    module("nodatarow");

    test("nodatarow after bind on empty array", function() {
        var $element = $("#jsGrid"),
            gridOptions = {},
            grid = new Grid($element, gridOptions);

        grid.option("data", []);

        equal(grid._content.find("." + grid.noDataRowClass).length, 1, "no data row rendered");
        equal(grid._content.text(), grid.noDataContent, "no data text rendered");
    });

    test("nodatarow customize content", function() {
        var noDataMessage = "NoData Custom Content",
            $element = $("#jsGrid"),
            gridOptions = {
                noDataContent: function() {
                    return noDataMessage;
                }
            },
            grid = new Grid($element, gridOptions);

        grid.option("data", []);

        equal(grid._content.text(), noDataMessage, "custom noDataContent");
    });


    module("row rendering", {
        setup: function() {
            this.testData = [
                { id: 1, text: "test1" },
                { id: 2, text: "test2" },
                { id: 3, text: "test3" }
            ];
        }
    });

    test("rows rendered correctly", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                data: this.testData
            },
            grid = new Grid($element, gridOptions);

        equal(grid._content.children().length, 3, "rows rendered");
        equal(grid._content.find("." + grid.oddRowClass).length, 2, "two odd rows for 3 items");
        equal(grid._content.find("." + grid.evenRowClass).length, 1, "one even row for 3 items");
    });

    test("custom rowClass", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                data: this.testData,
                rowClass: "custom-row-cls"
            },
            grid = new Grid($element, gridOptions);

        equal(grid._content.find("." + grid.oddRowClass).length, 2);
        equal(grid._content.find("." + grid.evenRowClass).length, 1);
        equal(grid._content.find(".custom-row-cls").length, 3, "custom row class");
    });

    test("custom rowClass callback", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                data: this.testData,
                rowClass: function(item, index) {
                    return item.text;
                }
            },
            grid = new Grid($element, gridOptions);

        equal(grid._content.find("." + grid.oddRowClass).length, 2);
        equal(grid._content.find("." + grid.evenRowClass).length, 1);
        equal(grid._content.find(".test1").length, 1, "custom row class");
        equal(grid._content.find(".test2").length, 1, "custom row class");
        equal(grid._content.find(".test3").length, 1, "custom row class");
    });

    test("rowClick standard handler", function() {
        var $element = $("#jsGrid"),
            $secondRow,
            grid = new Grid($element, { editing: true });

        grid.option("data", this.testData);

        $secondRow = grid._content.find("." + grid.evenRowClass);
        $secondRow.trigger("click", $.Event($secondRow));

        equal(grid._editingRow.get(0), $secondRow.get(0), "clicked row is editingRow");
    });

    test("rowClick handler", function() {
        var rowClickArgs,
            $element = $("#jsGrid"),
            $secondRow,
            gridOptions = {
                rowClick: function(args) {
                    rowClickArgs = args;
                }
            },
            grid = new Grid($element, gridOptions);

        grid.option("data", this.testData);

        $secondRow = grid._content.find("." + grid.evenRowClass);
        $secondRow.trigger("click", $.Event($secondRow));

        ok(rowClickArgs.event instanceof jQuery.Event, "jquery event arg");
        equal(rowClickArgs.item, this.testData[1], "item arg");
        equal(rowClickArgs.itemIndex, 1, "itemIndex arg");
    });

    test("row selecting with selectedRowClass", function() {
        var $element = $("#jsGrid"),
            $secondRow,
            gridOptions = {
                selecting: true
            },
            grid = new Grid($element, gridOptions);

        grid.option("data", this.testData);

        $secondRow = grid._content.find("." + grid.evenRowClass);

        $secondRow.trigger("mouseenter", $.Event($secondRow));
        ok($secondRow.hasClass(grid.selectedRowClass), "mouseenter adds selectedRowClass");

        $secondRow.trigger("mouseleave", $.Event($secondRow));
        ok(!$secondRow.hasClass(grid.selectedRowClass), "mouseleave removes selectedRowClass");
    });

    test("no row selecting while selection is disabled", function() {
        var $element = $("#jsGrid"),
            $secondRow,
            gridOptions = {
                selecting: false
            },
            grid = new Grid($element, gridOptions);

        grid.option("data", this.testData);

        $secondRow = grid._content.find("." + grid.evenRowClass);
        $secondRow.trigger("mouseenter", $.Event($secondRow));
        ok(!$secondRow.hasClass(grid.selectedRowClass), "mouseenter doesn't add selectedRowClass");
    });

    test("refreshing and refreshed callbacks", function() {
        var refreshingEventArgs,
            refreshedEventArgs,
            $element = $("#jsGrid"),
            grid = new Grid($element, {});

        grid.onRefreshing = function(e) {
            refreshingEventArgs = e;
            equal(grid._content.find("." + grid.oddRowClass).length, 0, "no items before refresh");
        };

        grid.onRefreshed = function(e) {
            refreshedEventArgs = e;
            equal(grid._content.find("." + grid.oddRowClass).length, 2, "items rendered after refresh");
        };

        grid.option("data", this.testData);

        equal(refreshingEventArgs.grid, grid, "grid provided in args for refreshing event");
        equal(refreshedEventArgs.grid, grid, "grid provided in args for refreshed event");
        equal(grid._content.find("." + grid.oddRowClass).length, 2, "items rendered");
    });

    test("grid fields normalization", function() {
        var CustomField = function(config) {
            $.extend(true, this, config);
        };

        jsGrid.fields.custom = CustomField;

        try {
            var $element = $("#jsGrid"),
                gridOptions = {
                    fields: [
                        new jsGrid.Field({
                            name: "text1",
                            title: "title1"
                        }),
                        {
                            name: "text2",
                            title: "title2"
                        },
                        {
                            name: "text3",
                            type: "custom"
                        }
                    ]
                },
                grid = new Grid($element, gridOptions);

            var field1 = grid.fields[0];
            ok(field1 instanceof jsGrid.Field);
            equal(field1.name, "text1", "name is set for field");
            equal(field1.title, "title1", "title field");

            var field2 = grid.fields[1];
            ok(field2 instanceof jsGrid.Field);
            equal(field2.name, "text2", "name is set for field");
            equal(field2.title, "title2", "title field");

            var field3 = grid.fields[2];
            ok(field3 instanceof CustomField);
            equal(field3.name, "text3", "name is set for field");
        } finally {
            delete jsGrid.fields.custom;
        }
    });

    test("grid field name used for header if title is not specified", function() {
        var $element = $("#jsGrid"),
            grid = new Grid($element, {
                fields: [
                    new jsGrid.Field({ name: "id" })
                ]
            });

        equal(grid._headerRow.text(), "id", "name is rendered in header");
    });

    test("grid fields header and item rendering", function() {
        var $element = $("#jsGrid"),
            $secondRow,
            gridOptions = {
                fields: [
                    new jsGrid.Field({
                        name: "text",
                        title: "title",
                        css: "cell-class",
                        headercss: "header-class",
                        align: "center"
                    })
                ]
            },
            grid = new Grid($element, gridOptions);

        grid.option("data", this.testData);

        equal(grid._headerRow.text(), "title", "header rendered");
        equal(grid._headerRow.find(".header-class").length, 1, "headercss class is attached");

        $secondRow = grid._content.find("." + grid.evenRowClass);
        equal($secondRow.text(), "test2", "item rendered");
        equal($secondRow.find(".cell-class").length, 1, "css class added to cell");
        ok($secondRow.find(".cell-class").hasClass("jsgrid-align-center"), "align class added to cell");
    });

    test("grid field cellRenderer", function() {
        var testItem = { text: "test" },
            args;

        var $grid = $("#jsGrid");

        var gridOptions = {
            data: [testItem],
            fields: [
                {
                    name: "text",
                    cellRenderer: function(value, item) {
                        args = {
                            value: value,
                            item: item
                        };
                        return $("<td>").addClass("custom-class").text(value);
                    }
                }
            ]
        };

        var grid = new Grid($grid, gridOptions);
        var $customCell = $grid.find(".custom-class");

        equal($customCell.length, 1, "custom cell rendered");
        equal($customCell.text(), "test");
        deepEqual(args, { value: "test", item: testItem }, "cellRenderer args provided");
    });


    module("inserting");

    test("inserting rendering", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                inserting: true,
                fields: [
                    {
                        name: "test",
                        insertcss: "insert-class",
                        insertTemplate: function() {
                            var result = this.insertControl = $("<input>").attr("type", "text").addClass("insert-input");
                            return result;
                        }
                    }
                ]
            },
            grid = new Grid($element, gridOptions);

        equal(grid._insertRow.find(".insert-class").length, 1, "insertcss class is attached");
        equal(grid._insertRow.find(".insert-input").length, 1, "insert control rendered");
        ok(grid.fields[0].insertControl.is("input[type=text]"), "insert control saved in field");
    });

    test("field without inserting", function() {
        var $element = $("#jsGrid"),
            jsGridFieldConfig = {
                insertTemplate: function() {
                    var result = this.insertControl = $("<input>").attr("type", "text");
                    return result;
                },
                insertValue: function() {
                    return this.insertControl.val();
                }
            },

            gridOptions = {
                inserting: true,
                fields: [
                    $.extend({}, jsGridFieldConfig, {
                        name: "field1",
                        inserting: false
                    }),
                    $.extend({}, jsGridFieldConfig, {
                        name: "field2"
                    })
                ]
            },

            grid = new Grid($element, gridOptions);

        grid.fields[0].insertControl.val("test1");
        grid.fields[1].insertControl.val("test2");
        deepEqual(grid._getInsertItem(), { field2: "test2" }, "field with inserting=false is not included in inserting item");
    });

    test("insert data", function() {
        var $element = $("#jsGrid"),

            inserted = false,
            insertingArgs,
            insertedArgs,

            gridOptions = {
                inserting: true,
                data: [],
                fields: [
                    {
                        name: "field",
                        insertTemplate: function() {
                            var result = this.insertControl = $("<input>").attr("type", "text");
                            return result;
                        },
                        insertValue: function() {
                            return this.insertControl.val();
                        }
                    }
                ],
                onItemInserting: function(e) {
                    insertingArgs = $.extend(true, {}, e);
                },
                onItemInserted: function(e) {
                    insertedArgs = $.extend(true, {}, e);
                },
                controller: {
                    insertItem: function() {
                        inserted = true;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.fields[0].insertControl.val("test");
        grid.insertItem();

        equal(insertingArgs.item.field, "test", "field is provided in inserting args");
        equal(grid.option("data").length, 1, "data is inserted");
        ok(inserted, "controller insertItem was called");
        deepEqual(grid.option("data")[0], { field: "test" }, "correct data is inserted");
        equal(insertedArgs.item.field, "test", "field is provided in inserted args");
    });

    test("insertItem accepts item to insert", function() {
        var $element = $("#jsGrid"),
            itemToInsert = { field: "test" },
            insertedItem,

            gridOptions = {
                data: [],
                fields: [
                    {
                        name: "field"
                    }
                ],
                controller: {
                    insertItem: function(item) {
                        insertedItem = item;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.insertItem(itemToInsert);
        deepEqual(grid.option("data")[0], itemToInsert, "data is inserted");
        deepEqual(insertedItem, itemToInsert, "controller insertItem was called with correct item");
    });


    module("editing");

    test("editing rendering", function() {
        var $element = $("#jsGrid"),
            $editRow,
            data = [{
                test: "value"
            }],

            gridOptions = {
                editing: true,
                fields: [
                    {
                        name: "test",
                        editcss: "edit-class",
                        editTemplate: function(value) {
                            var result = this.editControl = $("<input>").attr("type", "text").val(value).addClass("edit-input");
                            return result;
                        }
                    }
                ]
            },

            grid = new Grid($element, gridOptions);

        grid.option("data", data);

        equal(grid._content.find("." + grid.editRowClass).length, 0, "no edit row after initial rendering");

        grid.editItem(data[0]);

        $editRow = grid._content.find("." + grid.editRowClass);
        equal($editRow.length, 1, "edit row rendered");
        equal($editRow.find(".edit-class").length, 1, "editcss class is attached");
        equal($editRow.find(".edit-input").length, 1, "edit control rendered");

        ok(grid.fields[0].editControl.is("input[type=text]"), "edit control saved in field");
        equal(grid.fields[0].editControl.val(), "value", "edit control value");
    });

    test("editItem accepts row to edit", function() {
        var $element = $("#jsGrid"),
            $editRow,
            data = [
                { test: "value" }
            ],

            gridOptions = {
                editing: true,
                fields: [
                    { name: "test" }
                ]
            },

            grid = new Grid($element, gridOptions);

        grid.option("data", data);

        var $row = $element.find("." + grid.oddRowClass).eq(0);

        grid.editItem($row);
        $editRow = grid._content.find("." + grid.editRowClass);
        equal($editRow.length, 1, "edit row rendered");

        grid.cancelEdit();

        grid.editItem($row.get(0));
        $editRow = grid._content.find("." + grid.editRowClass);
        equal($editRow.length, 1, "edit row rendered");
    });

    test("edit item", function() {
        var $element = $("#jsGrid"),
            updated = false,
            updatingArgs,
            updatingRow,
            updatedRow,
            updatedArgs,
            data = [{
                field: "value"
            }],

            gridOptions = {
                editing: true,
                fields: [
                    {
                        name: "field",
                        editTemplate: function(value) {
                            var result = this.editControl = $("<input>").attr("type", "text").val(value);
                            return result;
                        },
                        editValue: function() {
                            return this.editControl.val();
                        }
                    }
                ],
                controller: {
                    updateItem: function(updatingItem) {
                        updated = true;
                    }
                },
                onItemUpdating: function(e) {
                    updatingArgs = $.extend(true, {}, e);
                    updatingRow = grid._rowByItem(data[0])[0];
                },
                onItemUpdated: function(e) {
                    updatedArgs = $.extend(true, {}, e);
                    updatedRow = grid._rowByItem(data[0])[0];
                }
            },

            grid = new Grid($element, gridOptions);

        grid.option("data", data);

        grid.editItem(data[0]);
        grid.fields[0].editControl.val("new value");
        grid.updateItem();

        deepEqual(updatingArgs.previousItem, { field: "value" }, "item before editing is provided in updating event args");
        deepEqual(updatingArgs.item, { field: "new value" }, "updating item is provided in updating event args");
        equal(updatingArgs.itemIndex, 0, "itemIndex is provided in updating event args");
        equal(updatingArgs.row[0], updatingRow, "row element is provided in updating event args");
        ok(updated, "controller updateItem called");
        deepEqual(grid.option("data")[0], { field: "new value" }, "correct data updated");
        equal(grid._content.find("." + grid.editRowClass).length, 0, "edit row removed");
        equal(grid._content.find("." + grid.oddRowClass).length, 1, "data row rendered");
        deepEqual(updatedArgs.previousItem, { field: "value" }, "item before editing is provided in updated event args");
        deepEqual(updatedArgs.item, { field: "new value" }, "updated item is provided in updated event args");
        equal(updatedArgs.itemIndex, 0, "itemIndex is provided in updated event args");
        equal(updatedArgs.row[0], updatedRow, "row element is provided in updated event args");
    });

    test("cancel edit", function() {
        var $element = $("#jsGrid"),
            updated = false,
            data = [{
                field: "value"
            }],

            gridOptions = {
                editing: true,
                fields: [
                    {
                        name: "field",
                        editTemplate: function(value) {
                            var result = this.editControl = $("<input>").attr("type", "text").val(value);
                            return result;
                        },
                        editValue: function() {
                            return this.editControl.val();
                        }
                    }
                ],
                controller: {
                    updateData: function(updatingItem) {
                        updated = true;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.option("data", data);

        grid.editItem(data[0]);
        grid.fields[0].editControl.val("new value");
        grid.cancelEdit();

        ok(!updated, "controller updateItem was not called");
        deepEqual(grid.option("data")[0], { field: "value" }, "data were not updated");
        equal(grid._content.find("." + grid.editRowClass).length, 0, "edit row removed");
        equal(grid._content.find("." + grid.oddRowClass).length, 1, "data row restored");
    });

    test("updateItem accepts item to update and new item", function() {
        var $element = $("#jsGrid"),
            updatingItem,
            data = [{
                field: "value"
            }],

            gridOptions = {
                fields: [
                    { name: "field" }
                ],
                controller: {
                    updateItem: function(item) {
                        return updatingItem = item;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.option("data", data);

        grid.updateItem(data[0], { field: "new value" });

        deepEqual(updatingItem, { field: "new value" }, "controller updateItem called correctly");
        deepEqual(grid.option("data")[0], { field: "new value" }, "correct data updated");
    });

    test("updateItem accepts single argument - item to update", function() {
        var $element = $("#jsGrid"),
            updatingItem,
            data = [{
                field: "value"
            }],

            gridOptions = {
                fields: [
                    { name: "field" }
                ],
                controller: {
                    updateItem: function(item) {
                        return updatingItem = item;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.option("data", data);

        data[0].field = "new value";

        grid.updateItem(data[0]);

        deepEqual(updatingItem, { field: "new value" }, "controller updateItem called correctly");
        deepEqual(grid.option("data")[0], { field: "new value" }, "correct data updated");
    });


    module("deleting");

    test("delete item", function() {
        var $element = $("#jsGrid"),
            deleted = false,
            deletingArgs,
            deletedArgs,
            data = [{
                field: "value"
            }],

            gridOptions = {
                confirmDeleting: false,
                fields: [
                    { name: "field" }
                ],
                controller: {
                    deleteItem: function(deletingItem) {
                        deleted = true;
                    }
                },
                onItemDeleting: function(e) {
                    deletingArgs = $.extend(true, {}, e);
                },
                onItemDeleted: function(e) {
                    deletedArgs = $.extend(true, {}, e);
                }
            },

            grid = new Grid($element, gridOptions);

        grid.option("data", data);

        grid.deleteItem(data[0]);

        deepEqual(deletingArgs.item, { field: "value" }, "field and value is provided in deleting event args");
        equal(deletingArgs.itemIndex, 0, "itemIndex is provided in updating event args");
        equal(deletingArgs.row.length, 1, "row element is provided in updating event args");
        ok(deleted, "controller deleteItem called");
        equal(grid.option("data").length, 0, "data row deleted");
        deepEqual(deletedArgs.item, { field: "value" }, "item is provided in updating event args");
        equal(deletedArgs.itemIndex, 0, "itemIndex is provided in updating event args");
        equal(deletedArgs.row.length, 1, "row element is provided in updating event args");
    });

    test("deleteItem accepts row", function() {
        var $element = $("#jsGrid"),
            deletedItem,
            itemToDelete = {
                field: "value"
            },
            data = [itemToDelete],

            gridOptions = {
                confirmDeleting: false,
                fields: [
                    { name: "field" }
                ],
                controller: {
                    deleteItem: function(deletingItem) {
                        deletedItem = deletingItem;
                    }
                }
            },

            grid = new Grid($element, gridOptions);

        grid.option("data", data);

        var $row = $element.find("." + grid.oddRowClass).eq(0);

        grid.deleteItem($row);

        deepEqual(deletedItem, itemToDelete, "controller deleteItem called correctly");
        equal(grid.option("data").length, 0, "data row deleted");
    });


    module("paging");

    test("pager is rendered if necessary", function() {
        var $element = $("#jsGrid"),

            grid = new Grid($element, {
                data: [{}, {}, {}],
                paging: false,
                pageSize: 2
            });

        ok(grid._pagerContainer.is(":hidden"), "pager is hidden when paging=false");
        equal(grid._pagerContainer.html(), "", "pager is not rendered when paging=false");

        grid.option("paging", true);

        ok(grid._pagerContainer.is(":visible"), "pager is visible when paging=true");
        ok(grid._pagerContainer.html(), "pager is rendered when paging=true");

        grid.option("data", [{}, {}]);
        ok(grid._pagerContainer.is(":hidden"), "pager is hidden for single page");
        equal(grid._pagerContainer.html(), "", "pager is not rendered for single page");
    });

    test("external pagerContainer", function() {
        var $pagerContainer = $("<div>").appendTo("#qunit-fixture").hide(),
            $element = $("#jsGrid");

        new Grid($element, {
            data: [{}, {}, {}],
            pagerContainer: $pagerContainer,
            paging: true,
            pageSize: 2
        });

        ok($pagerContainer.is(":visible"), "external pager shown");
        ok($pagerContainer.html(), "external pager rendered");
    });

    test("pager functionality", function() {
        var $element = $("#jsGrid"),
            pager,
            grid = new Grid($element, {
                data: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
                paging: true,
                pageSize: 2,
                pageButtonCount: 3
            });

        equal(grid._pagesCount(), 5, "correct page count");
        equal(grid.option("pageIndex"), 1, "pageIndex is initialized");
        equal(grid._firstDisplayingPage, 1, "_firstDisplayingPage is initialized");

        pager = grid._pagerContainer;
        equal(pager.find("." + grid.currentPageClass).length, 1, "there is one current page");
        ok(pager.find("." + grid.pageClass).eq(0).hasClass(grid.currentPageClass), "first page is current");
        equal(pager.find("." + grid.pageClass).length, 3, "three pages displayed");
        equal(pager.find("." + grid.pagerNavButtonClass).length, 3, "three nav buttons displayed: Next Last and ...");

        grid.openPage(2);
        equal(pager.find("." + grid.currentPageClass).length, 1, "there is one current page");
        ok(pager.find("." + grid.pageClass).eq(1).hasClass(grid.currentPageClass), "second page is current");
        equal(pager.find("." + grid.pageClass).length, 3, "three pages displayed");
        equal(pager.find("." + grid.pagerNavButtonClass).length, 5, "five nav buttons displayed: First Prev Next Last and ...");

        grid.showNextPages();
        equal(grid._firstDisplayingPage, 3, "navigate by pages forward");

        grid.showPrevPages();
        equal(grid._firstDisplayingPage, 1, "navigate by pages backward");

        grid.openPage(5);
        equal(grid._firstDisplayingPage, 3, "opening next non-visible page moves first displaying page forward");

        grid.openPage(2);
        equal(grid._firstDisplayingPage, 2, "opening prev non-visible page moves first displaying page backward");
    });

    test("pager format", function() {
        var $element = $("#jsGrid"),
            grid = new Grid($element, {
                data: [{}, {}, {}, {}, {}, {}],
                paging: true,
                pageSize: 2,
                pageIndex: 2,
                pageButtonCount: 1,
                pagerFormat: "a {pageIndex} {first} {prev} {pages} {next} {last} {pageCount} {itemCount} z",
                pagePrevText: "<",
                pageNextText: ">",
                pageFirstText: "<<",
                pageLastText: ">>",
                pageNavigatorNextText: "np",
                pageNavigatorPrevText: "pp"
            });

        grid._firstDisplayingPage = 2;
        grid._refreshPager();

        equal($.trim(grid._pagerContainer.text()), "a 2 << < pp2np > >> 3 6 z", "pager text follows the format specified");
    });

    test("loading by page", function() {
        var $element = $("#jsGrid"),
            data = [],
            itemCount = 20;

        for(var i = 1; i <= itemCount; i += 1) {
            data.push({
                value: i
            });
        }

        var gridOptions = {
            pageLoading: true,
            paging: true,
            pageSize: 7,
            fields: [
                { name: "value" }
            ],
            controller: {
                loadData: function(filter) {
                    var startIndex = (filter.pageIndex - 1) * filter.pageSize,
                        result = data.slice(startIndex, startIndex + filter.pageSize);
                    return {
                        data: result,
                        itemsCount: data.length
                    };
                }
            }
        };

        var grid = new Grid($element, gridOptions);

        grid.loadData();

        var pager = grid._pagerContainer;
        var gridData = grid.option("data");

        equal(gridData.length, 7, "loaded one page of data");
        equal(gridData[0].value, 1, "loaded right data start value");
        equal(gridData[gridData.length - 1].value, 7, "loaded correct data end value");
        ok(pager.find("." + grid.pageClass).eq(0).hasClass(grid.currentPageClass), "first page is current");
        equal(pager.find("." + grid.pageClass).length, 3, "three pages displayed");

        grid.openPage(3);
        gridData = grid.option("data");

        equal(gridData.length, 6, "loaded last page of data");
        equal(gridData[0].value, 15, "loaded right data start value");
        equal(gridData[gridData.length - 1].value, 20, "loaded right data end value");
        ok(pager.find("." + grid.pageClass).eq(2).hasClass(grid.currentPageClass), "third page is current");
        equal(pager.find("." + grid.pageClass).length, 3, "three pages displayed");
    });

    test("'openPage' method ignores indexes out of range", function() {
        var $element = $("#jsGrid"),
            grid = new Grid($element, {
                data: [{}, {}],
                paging: true,
                pageSize: 1
            });

        grid.openPage(0);
        equal(grid.option("pageIndex"), 1, "too small index is ignored");

        grid.openPage(3);
        equal(grid.option("pageIndex"), 1, "too big index is ignored");
    });


    module("sorting");

    test("sorting", function() {
        var $element = $("#jsGrid"),

            gridOptions = {
                sorting: true,
                data: [
                    { value: 3 },
                    { value: 2 },
                    { value: 1 }
                ],
                fields: [
                    { name: "value", sorter: "number" }
                ]
            },
            grid = new Grid($element, gridOptions);

        var gridData = grid.option("data");

        var $th = grid._headerRow.find("th").eq(0);
        $th.trigger("click");

        equal(grid._sortOrder, "asc", "asc sorting order for first click");
        equal(grid._sortField, grid.fields[0], "sort field is set");
        equal(gridData[0].value, 1);
        equal(gridData[1].value, 2);
        equal(gridData[2].value, 3);
        ok($th.hasClass(grid.sortableClass));
        ok($th.hasClass(grid.sortAscClass));

        $th.trigger("click");

        equal(grid._sortOrder, "desc", "desc sorting order for second click");
        equal(grid._sortField, grid.fields[0], "sort field is set");
        equal(gridData[0].value, 3);
        equal(gridData[1].value, 2);
        equal(gridData[2].value, 1);
        ok(!$th.hasClass(grid.sortAscClass));
        ok($th.hasClass(grid.sortDescClass));
    });

    test("sorting with pageLoading", function() {
        var $element = $("#jsGrid"),
            loadFilter,

            gridOptions = {
                sorting: true,
                pageLoading: true,
                data: [
                    { value: 3 },
                    { value: 2 },
                    { value: 1 }
                ],
                controller: {
                    loadData: function(filter) {
                        loadFilter = filter;
                        return {
                            itemsCount: 0,
                            data: []
                        };
                    }
                },
                fields: [
                    { name: "value", sorter: "number" }
                ]
            },

            grid = new Grid($element, gridOptions);

        var $th = grid._headerRow.find("th").eq(0);
        $th.trigger("click");

        equal(grid._sortOrder, "asc", "asc sorting order for first click");
        equal(grid._sortField, grid.fields[0], "sort field is set");
        equal(loadFilter.sortOrder, "asc", "sort direction is provided in loadFilter");
        equal(loadFilter.sortField, "value", "sort field is provided in loadFilter");

        $th.trigger("click");

        equal(grid._sortOrder, "desc", "desc sorting order for second click");
        equal(grid._sortField, grid.fields[0], "sort field is set");
        equal(loadFilter.sortOrder, "desc", "sort direction is provided in loadFilter");
        equal(loadFilter.sortField, "value", "sort field is provided in loadFilter");
    });

    test("no sorting for column with sorting = false", function() {
        var $element = $("#jsGrid");

        var gridOptions = {
            sorting: true,
            data: [
                { value: 3 },
                { value: 2 },
                { value: 1 }
            ],
            fields: [
                { name: "value", sorting: false }
            ]
        };

        var grid = new Grid($element, gridOptions);

        var gridData = grid.option("data");

        var $th = grid._headerRow.find("th").eq(0);
        $th.trigger("click");

        equal(grid._sortField, null, "sort field is not set for the field with sorting=false");
        equal(gridData[0].value, 3);
        equal(gridData[1].value, 2);
        equal(gridData[2].value, 1);
        equal($th.hasClass(grid.sortableClass), false, "no sorting css for field with sorting=false");
        equal($th.hasClass(grid.sortAscClass), false, "no sorting css for field with sorting=false");
    });

    test("sort accepts sorting config", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                sorting: true,
                data: [
                    { value: 3 },
                    { value: 2 },
                    { value: 1 }
                ],
                fields: [
                    { name: "value", sorter: "number" }
                ]
            },
            grid = new Grid($element, gridOptions);

        var gridData = grid.option("data");

        grid.sort({ field: "value", order: "asc" });
        equal(grid._sortOrder, "asc", "asc sorting order is set");
        equal(grid._sortField, grid.fields[0], "sort field is set");
        equal(gridData[0].value, 1);
        equal(gridData[1].value, 2);
        equal(gridData[2].value, 3);

        grid.sort({ field: 0 });
        equal(grid._sortOrder, "desc", "desc sorting order for already set asc sorting");
        equal(grid._sortField, grid.fields[0], "sort field is set");
        equal(gridData[0].value, 3);
        equal(gridData[1].value, 2);
        equal(gridData[2].value, 1);

        grid.sort("value", "asc");
        equal(grid._sortOrder, "asc", "asc sorting order is set");
        equal(grid._sortField, grid.fields[0], "sort field is set");

        grid.sort(0);
        equal(grid._sortOrder, "desc", "desc sorting order for already set asc sorting");
        equal(grid._sortField, grid.fields[0], "sort field is set");
    });

    test("getSorting returns current sorting", function() {
        var $element = $("#jsGrid"),
            gridOptions = {
                sorting: true,
                data: [
                    { value: 3 },
                    { value: 2 },
                    { value: 1 }
                ],
                fields: [
                    { name: "value", sorter: "number" }
                ]
            },
            grid = new Grid($element, gridOptions);

        deepEqual(grid.getSorting(), { field: undefined, order: undefined }, "undefined field and order before sorting");

        grid.sort("value");
        deepEqual(grid.getSorting(), { field: "value", order: "asc" }, "current sorting returned");
    });


});
