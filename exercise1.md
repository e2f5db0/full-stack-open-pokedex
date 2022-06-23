# Exercise 11.1 – Warming up

Let us assume that a team of six people are working on a code project written in Python (Flask). The application is in active development and will be released soon. What kind of a CI setup would be appropriate for the situation?

The team will probably want to make sure their code is linted within or before the pipeline. They could use the tool *pylint* for this. The tool enforces a coding standard decided by the team and can make suggestions how the code could be refactored.

The code needs to be tested automatically as well. This could be achieved by the testing framework called *Pytest*. It can handle a variety of unit tests and it is mainly used to write API test cases.

Python itself doesn't need building but the team would probably want to build a *docker* image of the application, which is guaranteed to work the same way in any environment. This will hopefully eliminate or at least reduce "it works on my machine" kind of problems.

If the team would not want to use cloud-based Github Actions or self-hosted Jenkins for the CI setup, CircleCI and Travis CI are widely used alternatives. The team should probably put in the work to setup a self-hosted Jenkins instance if the project includes or handles some sensitive information. And if not, cloud-based options would be the simpler option.