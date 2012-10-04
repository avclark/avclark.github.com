---
layout: screencast
title: Easy Wordpress Database Management with Alfred
sub: The Gently Mad Screencast No. 2
vimeo: 50775041
---

In this screencast I walk through how to easily export a local database and import to a remote server. This is especially helpful when you're working locally with Wordpress. Thanks for watching. 

**Final Bash Script for Uploading**
{% highlight bash %}
# Dump local database
/Applications/MAMP/Library/bin/mysqldump --host=localhost -uroot -proot {query} > {query}.sql 

#Import to remote server
/Applications/MAMP/Library/bin/mysql -h YOURHOSTNAME.com --port=3306 --user=root --password=YOURPASSWORD {query} < {query}.sql
{% endhighlight %}

**Final Bash Script for Downloading**
{% highlight bash %}
# Dump remote database
/Applications/MAMP/Library/bin/mysqldump -h YOURHOSTNAME.com --user=root --password=YOURPASSWORD {query} > {query}.sql

# Import to local server
/Applications/MAMP/Library/bin/mysql --host=localhost -uroot -proot {query} < {query}.sql
{% endhighlight %}

**Links**

+ [Alfred App](http://www.alfredapp.com)
+ [Sequel Pro](http://www.sequelpro.com)