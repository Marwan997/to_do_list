exports.getDate = function() {     //returns the date
                    let today = new Date();
                    let options = {   // JSON structure
                        weekday: "long",
                        day: "numeric",
                        month: "long"
                    };
                    let day = today.toLocaleDateString("en-US", options);

                     return day;
                }

exports.getDay = function() {   //returns only the day
                    let today = new Date();
                    let options = {   // JSON structure
                        weekday: "long"
                    };
      
                    let day = today.toLocaleDateString("en-US", options);

                    return day;
                }

