/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Srinivas Gopal B V",
    "role" : "Recent Computer Engineering Gradute",
    "contacts" : {
        "mobile" : "614-966-2322",
        "email" : "bindinganavallevenkataram.1@osu.edu",
        "github" : "gopal-srinivas",
        "location" : "San Francisco Bay Area"
    },
    "welcomeMessage" : "Hello, I'm Srinivas. I'm an aspiring software engineer looking for full-time career opportunities.",
    "skills" : [
        "Mobile Development(Android, iOS)", "Python(Numpy, Pandas, Matplotlib, Scikit)", "C/C++, Java, Perl, Shell Scripting", "Web Development(HTML, CSS, JavaScript, Bootstrap)"
    ],
    "bioPic" : "images/test1.png" 
};

var education = {
    "schools" : [
        {
            "name" : "Ohio State University",
            "location" : "Columbus, OH, USA",
            "degree" : "Masters",
            "majors" : ["CE"],
            "dates" : "2015 - 2016",
            "url" : "https://www.osu.edu/"
            
        },
        {
            "name" : "Birla Institute of Technology & Science(BITS) Pilani(Main Campus) ",
            "location" : "Pilani, RJ, India",
            "degree" : "Bachelors",
            "majors" : ["EE"],
            "dates" : "2011 - 2015",
            "url" : "https://www.bits-pilani.ac.in/"
            
            
        }
    ],
    "onlineCourses" : [
	{
            "title": "Intro to Data Analysis",
            "school" : "Udacity",
            "dates" : 2017,
            "url" : "https://www.udacity.com/course/intro-to-data-analysis--ud170"
        },
         {
            "title": "Gradle for Android and Java",
            "school" : "Udacity",
            "dates" : 2017,
            "url" : "https://www.udacity.com/course/gradle-for-android-and-java--ud867"
        },
        {
            "title": "JavaScript Basics",
            "school" : "Udacity",
            "dates" : 2016,
            "url" : "https://www.udacity.com/course/javascript-basics--ud804"
        },
         {
            "title": "Intro to HTML and CSS",
            "school" : "Udacity",
            "dates" : 2016,
            "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        }
    ]
};


var work = {
    "jobs" : [
        {
            "employer" : "ECE Department, Ohio State University",
            "title" : "Project Associate",
            "dates" : "August 2016 - December 2016",
            "description" : "Developed an Android App to monitor LED lighting performance under various ambient temperature conditions for LED fixtures embedded in an airport-like environment.Designed a tabbed UI to display temperature summary for a week in a graphical interface, by accessing MySQL database from a PHP server containing temperatures recorded at a 5-minute interval. The database entries were sent in a JSON encoded format from the PHP server which was parsed in the application to generate data points for the graph"
        }
    ]
};

var project = {
    "projects" : [
        {
            "title" : "Android Joke-Telling App",
            "dates" : "2017",
            "description" : "Built an Android joke-telling app using gradle which factored functionality into java and android libraries to provide and display the jokes. Configured a Google cloud endpoints (GCE) server to provide the jokes which are fetched and displayed in the android app"
        },
        {
            "title" : "AMR Convergence Algorithm Analysis",
            "dates" : "2016",
            "description" : "Developed parallel versions of AMR convergence algorithms using Pthreads, Open MP and CUDA Libraries and characterized each version for performance gain relative to a serial version" 
        },
        {
            "title" : "Webpage Generator",
            "dates" : "2016",
            "description" : "Developed a python code to generate a html webpage displaying media portfolio based on user input data using appropriate python libraries" 
        },
        {
            "title" : "Pitch Perfect App",
            "dates" : "2017",
            "description" : "Implemented an iOS application to record audio and replay in six different pitch variations using AVAudioRecorder class" 
        },
        {
            "title" : "TAGE Branch Predictor",
            "dates" : "2016",
            "description" : "Implemented a Tagged Geometric History Length(TAGE) predictor in C++, the state-of-the-art conditional branch predictor to predict outcome of branch instructions and achieved mis-prediction rate of 3.6 MPKI" 
        }
        
    ]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
    
    $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);
    
    for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};
    

		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
    
    $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);

    
    
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};


education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
        var formattedName2 = formattedName.replace("#",education.schools[school].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName2 + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
      $(".education-entry:last").append(HTMLonlineClasses);
    for(Oclass in education.onlineCourses){
        
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[Oclass].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[Oclass].school);
        var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[Oclass].dates);
        var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[Oclass].url);
        var formattedURL2 = formattedURL.replace("#",education.onlineCourses[Oclass].url); 
        
        $(".education-entry:last").append(formattedTitle + formattedSchool,formattedDates,formattedURL2);
    }
};

project.display = function(){
	for(item in project.projects){
        
		$("#projects").append(HTMLprojectStart);
        
		var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",project.projects[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		
	}
};

bio.display();

work.display();

education.display();

project.display();

//$("#mapDiv").append(googleMap);
