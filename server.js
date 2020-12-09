const express = require("express");
const app = express();
//TO SERVE STATIC FILES

const fs = require('fs');
const server = require("http").createServer(app);
const router = express.Router();
require("dotenv").config();
const debug = require('debug')('debug');
 
 
 
require("./middleware")(app);



/* const winkNLP = require( 'wink-nlp' );
const its = require( 'wink-nlp/src/its.js' );
const as = require( 'wink-nlp/src/as.js' );
const model = require( 'wink-eng-lite-model' );
const nlp = winkNLP( model );
var nlpUtil = require( 'wink-nlp-utils' ); */


 
/* app.get('/',  (req, res) => {
 
      const text = "ANANDAN.K No.10, Main road, ullavaikkal,          				E-Mail		:  barath1115@gmail.com Pondicherry -605502.						Mobile No	: +91-99433 80729 CAREER OBJECTIVE To be part of reputed organization which provides a steady career growth along with job satisfaction, challenges and give value contribution in the success of organization. PROFESSIONAL SUMMARY •	Completed AWS Associate Developer. •	Services used in AWS Ec2, S3, RDS, Elastic Search, •	Developed both server / serverless based applications.API Gateway, Lambda etc. •	Hands on Experience in RESTFULL API’s using Node js, Laravel . •	Designed web Applications using core php, Codeigniter, Laravel, Nodejs, wordpress CMS,  Angular 5-8 , Vue.js. •	Database used MySql, MongoDB, DynamoDB. •	Integrated Payment Gateway [Domestic, International], Google API’s, SMS gateway [Domestic] and CRON jobs. •	Code versioning in GitHub. •	Implemented Multi-languages in Web Application [Codeigniter]. PROFESSIONAL EXPIRIENCE Manureva Digital Solutions. - Pondicherry. Duration : From Nov 2018 •	Job Role: Backend Web Developer. •	Creating Backoffice, API’s.. •	Web Application maintenance. •	Follow Agile & Scrum Methodology. •	Projects: Coxfarms, LoveLotus, MyTeamFoot, MyTeamSports, Activity. •	Hands-on experience in AWS . •	Languagesused : Laravel, Node Js, Wordpress. •	Team size : 5 Xlabz Technologies Pvt. Ltd. - Pondicherry. Duration : 2 Year [2016 Nov ] •	Job Role: Backend Web Developer. •	Creating Restfull API’s for [Android, IOS, Windows] Mobile Applications. •	Creating Admin Module, Payment Gateway for App’s. •	Projects: FindNearMe, LogoFoundry, Brandee, The Smoothie Bar[POS, Online Sales portal ], Bluespoon. o	Integrated Google Geolocation API. o	Payment Gateway [Paypal, RazorPay, PayUMoney]. o	SMS Gateway [99SMS, TextLocal]. •	Hands-on experience with Digital Ocean [Ubuntu 16.04] . •	Languagesused : php [Codeigniter, Laravel], Node Js, vue.js. •	Databaseused: MySql, Mango DB, Neo4J. •	Team size : 3 Wings e Tax Solution Pvt. Ltd. - Bangalore, Karnataka. Work Experience : 1.6 Year. [ 2015 Jun – 2016 Oct ] •	Job Role: Web Developer. •	Created and Customized the Web App for Tax Processing and filing without defaults, responsible to maintain FTP Service. Mostly worked in Coding, Testing, Implementation & Maintenance in Core PHP and MySql. •	Managed Domain, Hosting and Database. •	Projects : Wings ETDS,  EasyUpload, HRMS. •	Team size : 3 Other Outsourcing Projects URL : http://kgnadvertisement.in/KGNADS/ Billing Application for News paper advertisement agency – Admin user can generate a Invoice for the users  with various Reports Options. •	Language Used :  Nodejs with Mysql Backend, Angular 6 Frontend. •	EC2(Linux AMI ) [Apache Server], RDS, SES, CICD. •	Team size : 1 •	Payment Gateway [RazorPay] URL : https://taxpapers.in/ Online portal for Tax Consultants to store their client Certified Tax documents. •	Language Used :  Nodejs with DynamoDb Backend, Angular 8 Frontend. •	EC2(Linux 2 AMI) [Apache Server], Dynamo DB, S3, SES,CICD. •	Team size : 1 •	Payment Gateway [RazorPay] URL : https://tntbps.nirt.res.in/ TamilNadu Govertment portal to maintain TB patients details and logs. •	Language Used :  Laravel (API), Codeigniter (WEB, DB : mysql. •	Hosting Maintenance in NIRT Server (cent os). •	Team size : 5 LoveLotus •	Team size : 3 •	Social Networking App. •	Language used : Node js, DB : Dynamo DB. •	Other Services : API Gateway, Lambda [Serverless Framework], S3, Elastic Search, Cognito URL : http://tamilhistoricalfacts.in/ •	Team size : 3 •	App to serve details of old tamil history. •	Language used : Node js, DB : Dynamo DB. •	Other Services : S3, Elastic Search, Cognito, Ec2 [ngnix] Blood Donor details Maintenance Application for  JIPMER [‘PONDICHERRY’]. ACADEMIC QUALIFICATIONS COURSE	INSTITUTION	BOARD/ UNIVERSITY	YEAR OF          PASSING	MARKS M.Tech (Networking) Sri ManakulaVinayagarEngineeringCollege Pondicherry University	May-15	8.48/10 B.Tech (CSE) SMVEC	Pondicherry University	Jun-13	7.8/10 DCT	Krishnasamy Memorial Polytechnic College (Cuddalore)	DOTE	Apr-2010	77.79% HSC	Sri Sankar’sVidyashramam Hr. Sec. School (Pondicherry)	TN State Board	Mar-2008	63% SSLC	SSVM	TN State Board	Mar-2006	67% CO-CURRICULAR ACTIVITIES •	Worked as Trainer in Tritech, Pondicherry. •	In-Plant training in BSNL (Tele Communication Management), Pondicherry. •	Participated in Network Simulator Workshop in VIT, vellore-2011. •	Participated in ASP.net and Mobile Apps Workshop in VIT, vellore-2011. INDUSTRIAL EXPOSURE •	Worked as Education Trainee in HCL Info System, Pondicherry. •	Industrial visit to the Infosys campus at Chengalpattu in January, 2012. •	Industrial visit to the Indian Space Research Organization, EMC2at Bangalore in February, 2012. ACHIEVEMENTS •	Successfully completed projects with short span of time. •	First class in Chennai Science Forum, Preparatory Examination. •	Got2ndprice in multimedia event in Cybyrus’12, Pondicherry. •	6thposition (90 %) in senior category –all India UNESCO info test, USI (2006). •	State 1st ,Universal Talent Search Exam, Shakespeare Institute, Chennai.(2007) •	State 3rd, My Experiments with Truth -Gandhi Study Center, Chennai (2007). EXTRA-CURRICULAR ACTIVITIES •	Participated in Various Public Awareness Programs. •	Participated in Blood Donation camp. (Moderate Blood Donor in JIPMER). PERSONAL TRAITS •	Easily Adoptable. •	Self Learning [Mostly Visual]. •	Self-Motivated. PERSONAL INFORMATION Date of Birth				: 11thMarch, 1991. Father’s Name			: Kaliamurthy.V [Rtd PY - SI] Mother’s Name			: Anandavalli.K [Home Decorator] Hobbies				: Long drive. Languages Known			: Tamil, English. I hereby declare that the above information that is provided is true to the best of my knowledge. Date: 10/03/2019 Place: Pondicherry.";

      let doc = nlp.readDoc(text);
        
        let output  = doc.out();
        let sentences  = doc.sentences().out(); // Sepearate as Sentences using full stop
        let tokens  = doc.tokens().out(); //Seperate as single Words
        let tokensWithDetails  = doc.tokens().out(its.type); //Token has Type to [word, number, email, punctuation]
        let entities  = doc.entities().out(); // Used to Find type of word its.detail 
        let emailFindUsingToken = doc      
        .tokens()
        .filter(
          (t) => t.out(its.type) === 'email' && !t.out(its.stopWordFlag)
         )
        .out();

        let emailFindUsingEntity = doc      
        .entities()
        .filter(
          (t) => t.out(its.type) === 'EMAIL'
         )
        .out();

        let findNoun =  doc.tokens()
        .filter(
          // Exclude nouns inside an entity
          (t) => !t.parentEntity() && t.out(its.pos) === 'NOUN'
         )
         .out();

         let markup =  doc.entities().each((e) => e.markup());

         let customEntity = doc.customEntities().out();
          
         //let  extractPersonsName = (text);

         var PdfReader = require('pdfreader').PdfReader;
         const resumeFolder = './uploads/';
         fs.readdir(resumeFolder, (err, files) => {
           
          files.forEach(file => {
            if(file){
              
              fs.readFile('./uploads/'+file, (err, pdfBuffer) => {
                // pdfBuffer contains the file content
                      new PdfReader().parseBuffer(pdfBuffer, function(err, item){
                          if (err)
                            console.log("Error")
                          else if (!item)
                            //console.log("Item Not Found")
                            {

                            }
                          else if (item.text)
                            //console.log(item.text);
                            { 

                              console.log(item.text);
                              let doc = nlp.readDoc(item.text);
                              let emailFindUsingEntity = doc      
                                    .entities()
                                    .filter(
                                      (t) => t.out(its.type) === 'EMAIL'
                                    )
                                    .out();

                                    console.log(emailFindUsingEntity);

                            }
                            
                      });
                  });
            }
            
              
          });
        });
        res.send(extractPersonsName);
}) */


var natural = require('natural');
var tokenizer = new natural.WordTokenizer();

const text = "ANANDAN.K No.10, Main road, ullavaikkal,          				E-Mail		:  barath1115@gmail.com Pondicherry -605502.						Mobile No	: +91-99433 80729 CAREER OBJECTIVE To be part of reputed organization which provides a steady career growth along with job satisfaction, challenges and give value contribution in the success of organization. PROFESSIONAL SUMMARY •	Completed AWS Associate Developer. •	Services used in AWS Ec2, S3, RDS, Elastic Search, •	Developed both server / serverless based applications.API Gateway, Lambda etc. •	Hands on Experience in RESTFULL API’s using Node js, Laravel . •	Designed web Applications using core php, Codeigniter, Laravel, Nodejs, wordpress CMS,  Angular 5-8 , Vue.js. •	Database used MySql, MongoDB, DynamoDB. •	Integrated Payment Gateway [Domestic, International], Google API’s, SMS gateway [Domestic] and CRON jobs. •	Code versioning in GitHub. •	Implemented Multi-languages in Web Application [Codeigniter]. PROFESSIONAL EXPIRIENCE Manureva Digital Solutions. - Pondicherry. Duration : From Nov 2018 •	Job Role: Backend Web Developer. •	Creating Backoffice, API’s.. •	Web Application maintenance. •	Follow Agile & Scrum Methodology. •	Projects: Coxfarms, LoveLotus, MyTeamFoot, MyTeamSports, Activity. •	Hands-on experience in AWS . •	Languagesused : Laravel, Node Js, Wordpress. •	Team size : 5 Xlabz Technologies Pvt. Ltd. - Pondicherry. Duration : 2 Year [2016 Nov ] •	Job Role: Backend Web Developer. •	Creating Restfull API’s for [Android, IOS, Windows] Mobile Applications. •	Creating Admin Module, Payment Gateway for App’s. •	Projects: FindNearMe, LogoFoundry, Brandee, The Smoothie Bar[POS, Online Sales portal ], Bluespoon. o	Integrated Google Geolocation API. o	Payment Gateway [Paypal, RazorPay, PayUMoney]. o	SMS Gateway [99SMS, TextLocal]. •	Hands-on experience with Digital Ocean [Ubuntu 16.04] . •	Languagesused : php [Codeigniter, Laravel], Node Js, vue.js. •	Databaseused: MySql, Mango DB, Neo4J. •	Team size : 3 Wings e Tax Solution Pvt. Ltd. - Bangalore, Karnataka. Work Experience : 1.6 Year. [ 2015 Jun – 2016 Oct ] •	Job Role: Web Developer. •	Created and Customized the Web App for Tax Processing and filing without defaults, responsible to maintain FTP Service. Mostly worked in Coding, Testing, Implementation & Maintenance in Core PHP and MySql. •	Managed Domain, Hosting and Database. •	Projects : Wings ETDS,  EasyUpload, HRMS. •	Team size : 3 Other Outsourcing Projects URL : http://kgnadvertisement.in/KGNADS/ Billing Application for News paper advertisement agency – Admin user can generate a Invoice for the users  with various Reports Options. •	Language Used :  Nodejs with Mysql Backend, Angular 6 Frontend. •	EC2(Linux AMI ) [Apache Server], RDS, SES, CICD. •	Team size : 1 •	Payment Gateway [RazorPay] URL : https://taxpapers.in/ Online portal for Tax Consultants to store their client Certified Tax documents. •	Language Used :  Nodejs with DynamoDb Backend, Angular 8 Frontend. •	EC2(Linux 2 AMI) [Apache Server], Dynamo DB, S3, SES,CICD. •	Team size : 1 •	Payment Gateway [RazorPay] URL : https://tntbps.nirt.res.in/ TamilNadu Govertment portal to maintain TB patients details and logs. •	Language Used :  Laravel (API), Codeigniter (WEB, DB : mysql. •	Hosting Maintenance in NIRT Server (cent os). •	Team size : 5 LoveLotus •	Team size : 3 •	Social Networking App. •	Language used : Node js, DB : Dynamo DB. •	Other Services : API Gateway, Lambda [Serverless Framework], S3, Elastic Search, Cognito URL : http://tamilhistoricalfacts.in/ •	Team size : 3 •	App to serve details of old tamil history. •	Language used : Node js, DB : Dynamo DB. •	Other Services : S3, Elastic Search, Cognito, Ec2 [ngnix] Blood Donor details Maintenance Application for  JIPMER [‘PONDICHERRY’]. ACADEMIC QUALIFICATIONS COURSE	INSTITUTION	BOARD/ UNIVERSITY	YEAR OF          PASSING	MARKS M.Tech (Networking) Sri ManakulaVinayagarEngineeringCollege Pondicherry University	May-15	8.48/10 B.Tech (CSE) SMVEC	Pondicherry University	Jun-13	7.8/10 DCT	Krishnasamy Memorial Polytechnic College (Cuddalore)	DOTE	Apr-2010	77.79% HSC	Sri Sankar’sVidyashramam Hr. Sec. School (Pondicherry)	TN State Board	Mar-2008	63% SSLC	SSVM	TN State Board	Mar-2006	67% CO-CURRICULAR ACTIVITIES •	Worked as Trainer in Tritech, Pondicherry. •	In-Plant training in BSNL (Tele Communication Management), Pondicherry. •	Participated in Network Simulator Workshop in VIT, vellore-2011. •	Participated in ASP.net and Mobile Apps Workshop in VIT, vellore-2011. INDUSTRIAL EXPOSURE •	Worked as Education Trainee in HCL Info System, Pondicherry. •	Industrial visit to the Infosys campus at Chengalpattu in January, 2012. •	Industrial visit to the Indian Space Research Organization, EMC2at Bangalore in February, 2012. ACHIEVEMENTS •	Successfully completed projects with short span of time. •	First class in Chennai Science Forum, Preparatory Examination. •	Got2ndprice in multimedia event in Cybyrus’12, Pondicherry. •	6thposition (90 %) in senior category –all India UNESCO info test, USI (2006). •	State 1st ,Universal Talent Search Exam, Shakespeare Institute, Chennai.(2007) •	State 3rd, My Experiments with Truth -Gandhi Study Center, Chennai (2007). EXTRA-CURRICULAR ACTIVITIES •	Participated in Various Public Awareness Programs. •	Participated in Blood Donation camp. (Moderate Blood Donor in JIPMER). PERSONAL TRAITS •	Easily Adoptable. •	Self Learning [Mostly Visual]. •	Self-Motivated. PERSONAL INFORMATION Date of Birth				: 11thMarch, 1991. Father’s Name			: Kaliamurthy.V [Rtd PY - SI] Mother’s Name			: Anandavalli.K [Home Decorator] Hobbies				: Long drive. Languages Known			: Tamil, English. I hereby declare that the above information that is provided is true to the best of my knowledge. Date: 10/03/2019 Place: Pondicherry.";
const search="node js php mysql laravel codeigniter"
///console.log(tokenizer.tokenize(text)); // REMOVE ALL THE SPECIAL CHARACTERS AND CONVERT IN TO ARRAY
//console.log(natural.HammingDistance("anandan", "anandan", false));
//console.log(natural.LevenshteinDistance(search, text, {search: true}));
//console.log(natural.PorterStemmerFr.stem("How are you"));
//var classifier = new natural.BayesClassifier();
/* classifier.addDocument('tcs Tata Consultancy Service', 'Tata Consultancy Service');
classifier.addDocument('HCL Hindustan Computer Limited', 'Hindustan Computer Limited');
classifier.addDocument('ACC Associated Cement Companies', 'Associated Cement Companies');
classifier.addDocument('Adidas', 'Adolf Dassler (Adi was short name of Adolf)');
classifier.addDocument('Adolf Dassler (Adi was short name of Adolf)', 'Adolf Dassler (Adi was short name of Adolf)');
classifier.addDocument('AMUL Anand Milk Union Limited', 'Anand Milk Union Limited');
classifier.addDocument('AT & T', 'American Telephone and Telegraph Company');
classifier.addDocument('American Telephone and Telegraph Company', 'American Telephone and Telegraph Company');
classifier.addDocument('NewTrain', 'Train'); */


/* classifier.events.on('trainedWithDocument', function (obj) {
  console.log(obj);
}); */
/* classifier.save('classifier.json', function(err, classifier) {
  // the classifier is saved to the classifier.json file!
}); */
/* classifier.train(); */
//console.log(classifier.classify('AMUL'));

/* natural.BayesClassifier.load('classifier.json', null, function(err, classifier) {
  console.log(classifier.classify('AMUL'));
}); */


/* var TfIdf = natural.TfIdf;
var tfidf = new TfIdf();
tfidf.addDocument(text);
tfidf.tfidfs('aws', function(i, measure) {
  console.log('document #' + i + ' is ' + measure);
}); */

/* var Trie = natural.Trie;
var trie = new Trie();
trie.addStrings(tokenizer.tokenize(text));
 
console.log(trie.contains("Node")); // TExt  Search 'Case Sensitive'
console.log(trie.findPrefix("node"));
 */

 

let port = process.env.ServerPort || 3001;
server.listen(port, () => {
  console.log("NodeStarted", port);
});
