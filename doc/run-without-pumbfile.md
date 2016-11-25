Due to thread issue, not able to run application with config/puma.rb.

# Temporary solution
Comment out config/puma.rb by renaming to puma.rb1
```
bundle install
rake db:create
rake db:migrate
```

Copy secrets.yml from standard rails5 application

Start application
```
rails s
```
No user in the database, let's sign up to create one user.
http://localhost:3000/sign_up

The user we created via sign up is not an admin, set to admin in rails console
```
rails console
```
firstUser = User.first
firstUser.admin = 1
firstUser.save
