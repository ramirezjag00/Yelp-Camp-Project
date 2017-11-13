 var mongoose = require("mongoose");
 var Campground = require("./models/campground");
 var Comment = require("./models/comment");

 var data = [
 	{
 		name: "Cloud's Rest",
 		image:"http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx",
 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu consectetur libero. Praesent et molestie urna, nec vehicula augue. Donec lacinia nulla ut congue cursus. Curabitur dignissim suscipit congue. Duis id odio nisi. Etiam ultrices interdum turpis, eget accumsan mi consectetur suscipit. Quisque gravida posuere ante. Praesent suscipit justo id accumsan congue. Nullam et sapien nec sapien faucibus consectetur eget venenatis lorem. Nullam nec malesuada tortor. Aliquam elementum nisi nisi, in molestie ipsum elementum nec."
 	},
 	{
 		name: "Deer Mountain",
 		image:"https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg",
 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu consectetur libero. Praesent et molestie urna, nec vehicula augue. Donec lacinia nulla ut congue cursus. Curabitur dignissim suscipit congue. Duis id odio nisi. Etiam ultrices interdum turpis, eget accumsan mi consectetur suscipit. Quisque gravida posuere ante. Praesent suscipit justo id accumsan congue. Nullam et sapien nec sapien faucibus consectetur eget venenatis lorem. Nullam nec malesuada tortor. Aliquam elementum nisi nisi, in molestie ipsum elementum nec."
 	},
 	{
 		name: "Paradise",
 		image:"http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
 		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu consectetur libero. Praesent et molestie urna, nec vehicula augue. Donec lacinia nulla ut congue cursus. Curabitur dignissim suscipit congue. Duis id odio nisi. Etiam ultrices interdum turpis, eget accumsan mi consectetur suscipit. Quisque gravida posuere ante. Praesent suscipit justo id accumsan congue. Nullam et sapien nec sapien faucibus consectetur eget venenatis lorem. Nullam nec malesuada tortor. Aliquam elementum nisi nisi, in molestie ipsum elementum nec."
 	}
 ]

 function seedDB(){
 	//Remove all campgrounds
 	 Campground.remove({}, function(err){
	 	if(err){
	 		console.log(err);
	 	} 
	 	console.log("removed campgrounds! ");
	 	 //add a few campgrounds
	 	 data.forEach(function(seed){
 	 		Campground.create(seed, function(err, campground){
	 	 		if(err){
	 	 			console.log(err);
	 	 		} else {
	 	 			console.log("added a campground");
	 	 			//add a few comments
	 	 			Comment.create({text: "This place is great lol",
	 	 			author:"Homer"
	 	 		}, function(err,comment){
	 	 				if(err){
	 	 					console.log(err);
	 	 				} else {
	 	 					campground.comments.push(comment);
	 	 					campground.save();
	 	 					console.log("Created a new comment");
	 	 				}
	 	 				
	 	 			});
	 	 		}
 	 		});
 		});
 	});
 }

 module.exports = seedDB;