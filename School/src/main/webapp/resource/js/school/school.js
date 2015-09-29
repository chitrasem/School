var school = {
		
		noData : '<div class="alert alert-success">'+
				 'There is no data in the database yet. <a href="add" class="alert-link">Click here</a>.to add'+
				 '</div>',
		dbError : function(messageError){
			message = '<div class="alert alert-danger">'+
			'Please contact to the IT for the following error:'+messageError+
			  '</div>';
			return message;
		},
		/**
		 * 
		 */
		block : function(){
			$('div.content-page').block({ 
                css: {	border					: 'none', 
                    	padding					: '15px', 
                    	backgroundColor			: '#000', 
                    	'-webkit-border-radius'	: '10px', 
                    	'-moz-border-radius'	: '10px', 
                    	opacity					: .5, 
                    	color					: '#fff'  } 
            });
			
		},
		unblock : function(){
			$('div.content-page').unblock();			
		},
		/**
		 * 
		 * @param btnId
		 * @param name
		 */
		createButton : function(btnId,name){
			var btnName = "<button id='"+btnId+"' class='btn btn-primary waves-effect waves-light'>"+ name +" <i class='fa fa-plus'></i></button>";
			$("#resultButton").append(btnName);
			
		}
		
			
};