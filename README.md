# Track a Train
It is a website for tracking trains running in Punjab region of the Indian Railways. The data is fetched from IRCTC's website and saved into a local SQLite database. The complete front end is in Bootstrap and the back end uses both Javascript and Python. It uses Google Maps API as its basic component and runs on Django framework. A few modifications have been made to the original Google Maps in order to provide a warm look and feel to the users.

## Details of the front end
The GUI contains markers for all the stations in order to precisely indicate their location. The trains are indicated by a separate arrow symbol which always points in the direction of movement of the train. All the tracks are highlighted by red polylines and our superimposed on the original location of the railway tracks. All the trains should run on their original time as mentioned in the official IRCTC website but just for the sake of presenting this as a working project, we have to run them a lot faster. So the speed of the trains have been increased hundred folds in order to display them running. All the data has been stored in the database and retrieved using Django’s templates.

## Prerequisites
The following technologies need to be preinstalled:
1. Python 3.0 +
2. Django 

## Installing 
The user should download the entire repository and then start the local server using the following command: 
"python manage.py runserver".
The user can then view the website in their browser on localhost 

## Developers
1. Puranjay Arora 
2. Mansi Khurana 
