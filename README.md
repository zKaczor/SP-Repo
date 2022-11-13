# SP-Repo
Senior Project Website

## SSH into Server
ssh -i "LightsailDefaultKey-us-east-1.pem" ubuntu@3.227.111.62

## Start Server
cd senior_project_website

gunicorn senior_project_website.wsgi --bind 0.0.0.0:8000 --workers 4
