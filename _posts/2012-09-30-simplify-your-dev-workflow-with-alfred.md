---
layout: screencast
title: Simplify Your Dev Workflow with Alfred
sub: The Gently Mad Screencast No. 1
vimeo: 50485837
---

This is my first screencast. It's actually my first tutorial of any kind, so forgive me for the lack of polish. It was a lot of fun to make and I plan to do a lot more of these things. Feedback is always appreciated, so let me know what you think in the comments or hit me up on Twitter. Thanks for watching. 

**Final Bash Script**
{% highlight bash %}
# Create Beanstalk Repository
printf "git\n \n" | /Users/avclark/beanstalk repo:create {query}

# Create our new project directory
cd ~/sites && mkdir {query} && cd {query}

# Clone our HTML-Base repo from Github
git clone https://github.com/avclark/HTML-Base.git

# Cleanup dirctory
cp -R HTML-Base/* . && rm -rf HTML-Base && rm readme.md

# Initialize git, add remote Beanstalk repo and push first commit
git init
git add .
git commit -m "First commit."
git remote add beanstalk git@bottlerocket-creative.beanstalkapp.com:/{query}.git
git push beanstalk master

# Add repo to Tower
/Applications/Tower.app/Contents/MacOS/gittower --add ~/sites/{query}
{% endhighlight %}

**Links**

+ [Jeffrey Way's Tutorial](http://net.tutsplus.com/tutorials/tools-and-tips/how-web-developers-can-use-alfred/?search_index=2)
+ [Alfred App](http://www.alfredapp.com)
+ [Beanstalk App](http://beanstalkapp.com)
+ [Github](https://github.com)
+ [Leon Barrett's Beanstalk Command Line Utility](https://github.com/leonbarrett/BeanstalkCommandLine)
+ [Tower App](http://www.git-tower.com)