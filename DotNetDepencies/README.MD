# Packages 
### do you need one?
* **Getting better code**: if you are dealing with authentication and autherazation, there are standard patters that you *MUST get right* to protect customer data. There are standard patterns out there you will always need, and issues are patched as they arise. you're not likely to write better code yourself.
* **Saving time**: it is not good use of your time to replicate the work of writing this code if you don't have to.
* **Maintenance**: All libraries and apps need maintaining sooner or later, like correcting bugs or adding a new feature. or an open-source software team can fix it.

### Evaluating packages
* **size**: The number of dependencies might create a large footprint. if your on limited banwidth or have hardware limitations, this is a concern.
* **Licensing**: Ensure that the license granted for the library covers your intended use,  whether its commercial, personal, or academic

>You can learn more about a package before installing it by going to https://www.nuget.org/packages/<package name>. This URL will take you to a detailed page for the package. Select the Dependencies drop-down list to see on which packages it relies to function.
## Install a package
There are several ways to install packages
* built-in command line and graphical user interface for packaged in VS Code. the command-line tool connects to a global registry, fetches the package, and stores it in a cached folder.
    * `dotnet add package <name of package>`
### Finding packages
* **Registries**: a global registry, like NuGet.org, can host your own registries that can be either private or public. GitHub and Azure DevOps make privare registries available
* **Files**: You can install a package from a local folder. Installation from a package is common when you're trying to develop your own .NET libraries and want to test a package locally.
![Alt text](https://learn.microsoft.com/en-us/training/modules/dotnet-dependencies/media/nuget-roles.png)

### .NET commands 
the .NET Core CLI has quite a few commands. Helping with tasks like installing packages, initializing .NET projects.
The commands belong in categories!
* **Mange dependencies**: Commands in this category cover installation, removal, cleanup, after package installations, and package updates
* **Run Programs**: The .NET Core tool can help you manage flows in your application development. running tests, building code, and running migrate commands to upgrade projects
* **Author and publish packages**: Several commands can help you with tasks like creating a compressed package and pushing the package to a registry.

### Restore & clean up Dependencies
* When you creare or clone a project, the included dependencies are not downloaded or installed until you build your project. run the `dotnet restore` command to manually restore dependencies, as well as project-specific tools.
* you're likley to realize that you no longer need a package, or it is'nt the one you need. use `dotnet remove package <name of dependency>`. this will remove it from the .csproj file.

### BEFORE you try to update a library
* **The type of update**: You can communicate the type of update update by using a system called *semantic versioning*. The way the version numer of the library is expessed communicates to developers the type of update with which they are dealing with.
* **Whether the project it configured properly** You can configure the .NET project so that you get only the type of updates you want. **RECOMENDED**
* **Security problems** Be aware of problems that might happen. Problems arise as vulnerabilities are detected. Ideally patches will be released.

## Semantic versioning
There is an industry standard called *semantic versioning* this is how you express the type of change that you or some other developer is introducing to a library. SV works by ensuring that a package has a version number, and that version number is divided into these sections.
* **Major Version**: The leftmost number.  a change to this number means that you can expect breaking changes in code. you may need to rewrite part of your code.  `e.g. the 1 in 1.0.0`
* **Minor Version**: The middle number. a change to these means that features have been added. your code should still work. `e.g. the 2 in 1.2.0`
* **Patch Version**: the rightmost number. a change to this means that a change has been applied that fixes something in the code that should have worked. `e.g. the 3 in 1.2.3`

