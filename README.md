# .NET
## .NET Ecosystem
The term `ecosystem` encompasses the different elements of an application. These elemts combine to make .NET a compelling platform to learn and build applications.
## Creating WEB APIs
When building applications, especially in the context of web development, ASP.NET web APIs offer a powerful way to create RESTful endpoints that allow your application to communicate with other systems and clients
### Creating a new ASP.NET web API project
create a new project using the terminal.
```shell
dotnet new webapi -f net6.0
```

### Definging API endpoints
API endpoints in this context are defined within `controllers`. these are classes that contain public methods. 
e.g.
```c#
using Microsoft.AspNetCore.Mvc;

namespace YourApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetProducts()
        {
            // Retrieve and return a list of products
        }
    }
}
```
### Handling Request and Response data
ASP.NET web APIs automatically handle serialization and deserialization of data, typically in JSON format.
```csharp
public class Product
{
    public int Id { get; set; }
    public string Name { get; set; }
    // Other properties
}

[HttpGet]
public IActionResult GetProducts()
{
    List<Product> products = // Retrieve products
    return Ok(products); // Returns JSON response
}

```
## Languages and Compilers
* .NET languages like C# and F# are used to write source code, which instructs the computer during program execution.
* Code is compiled by the .NET compiler into the intermediate language (IL) before execution, saved in a .NET assebly
* IL compilation ensures platform independence enabling code to run on various systems.

## C# vs .NET
* C# is a `programming language`, while .NET is an `ecosystem`
*  c# allows referencing and calling methods from .NET code libraries (assemblies).
* The C# Compiler from the .NET SDK generates
.NET assemblies, which are executeed by the .NET runtime.

## .NET runtime functionality
The .NET runtime provides a controlled environment for the app.

* *Compiles* IL into a system-specific binary on first run.
* *Identifies* the programs entry point and executes instructions sequentially.
* *Manages* resources like memory and network access
* *Ensures* security against potentially malicious software, offering app isolation

```csharp
using System;

public class Program
{
  public static void Main()
  {
    Console.WriteLine("Hello world!");
  }
}
```
### Main() Method
Execution flow of the `Main()` method.
1. C# compiler is envoked to compile code.
2. Compiler checks for errors; if found, displays the error message
3. Successful compilation leads to .NET runtime opening the compiled assembly.
4. Runtime starts at the `Main()` method within the `program` class.
5. Instructions run sequentially until the end or an output is produced
6. Runtime removes the program from memory.


# File Systems
You can use .NET to find and return information about files and folders.

### current directory
Access curent directory with the `GetCurrentDirectory` method.
```C#
Console.WriteLine(Directory.GetCurrentDirectory())
```
* .NET aids in retreiving file/folder information.

Access current directory with `Directory.GetCurrentDirectory()`.
### Special directory
.NET runs everywhere, and each operating system may have distinct special system folders. The `System.Environment.SpecialFolder` enumeration specifies constants to retrieve paths to special folders.
```C#
string docPath = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
```
### File Paths
Use `Path` class for handling paths and join with `Path.Combine`.

### Special path characters
Different OSs use distinct directory seperators. Use `Path.DirectorySeparatoryChar` to handle these differences.

```C#
Console.WriteLine($"stores{Path.DirectorySeparatorChar}201");

// returns:
// stores\201 on Windows
//
// stores/201 on macOSConsole.WriteLine($"stores{Path.DirectorySeparatorChar}201");

// returns:
// stores\201 on Windows
//
// stores/201 on macOS
```
### Join Paths
Combine paths cross-platform with `Path.Combine("stores","201")`. 
```C#
Console.WriteLine(Path.Combine("stores","201")); // outputs: stores/201
```
> Remember, use the `Path.Combine` or `Path.DirectorySeparatorChar` class instead of hardcoding strings, because the program might be running on many different OSs. The `Path` class doesn't care whether things actually exist; paths are conceptual, not physical, and the class is building and parsing strings for you.

### Path info
Use  `FileInfo` and `DirectoryInfo` classes for information about the file/folder
```C#
string docPath = Environment.GetFolderPath(Environment.SpecialFolder.MyDocuments);
```
## Create Files and Directories
Creating and deleting new files and directories programmatically is a common requirement in line-of-business applications

### Directories
* Use the `Directory.CreateDirectory` method to create directories.This method creates a new folder calles *newDir* inside the 201 folder
```C#
Directory.CreateDirectory(Path.Combine(Directory.GetCurrentDirectory(), "stores","201","newDir"));
```
* if */stores/201* does not already exsist, it will be created automatically
* To see if a directory exsists use this method
```C#
bool doesDirectoryExist = Directory.Exists(filePath);
```

### Create Files
You can create files by using the `File.WriteAllText` method. This method takes in a path to the file and the data you want to write to the file. If the file already exsists it will be overwritten.
```C#
File.WriteAllText(Path.Combine(Directory.GetCurrentDirectory(), "greeting.txt"), "Hello World!");
```
## Read and Write from files
### Read data from files
Files are read through the `ReadAllText` methods on the `file` class
```C#
File.ReadAllText($"stores{Path.DirectorySeparatorChar}201{Path.DirectorySeparatorChar}sales.json");
```
### Parse data
this data in its string format does not do you much good. You want the ability to parse this data into a format that you can use programmatically

There are many ways to parse JSON files with .NET, including a community library as Json.NET

* You can add Json.NET package to your project using NuGet:
```bash
dotnet add package newtonsoft.Json
```
* Then, add `using newtonsoft.Json` to the top of your class file
```C#
using newtonsoft.Json;
```
* And use the `JsonConvert.DeserializeObject` method:
```c#
var salesJson = File.ReadAllText($"stores{Path.DirectorySeparatorChar}201{Path.DirectorySeparatorChar}sales.json");
var salesData = JsonConvert.DeserializeObject<SalesTotal>(salesJson);

Console.WriteLine(salesData.Total);

class SalesTotal
{
  public double Total { get; set; }
}
```
> TIP: FIles come in a variety of formats. JSON files are the most desirable to work w/ because of the built-in support in the language. you may also encounter .csv files, fixed width, or some other format. in that case, search nuget.org for a parser

### Write data to files
To write data to a file, use the same `File.writeAllText` method, but pass in the data that you want to write
```c#
var data = JsonConvert.DeserializeObject<SalesTotal>(salesJson);

File.WriteAllText($"salesTotalDir{Path.DirectorySeparatorChar}totals.txt", data.Total.ToString());

// totals.txt
// 22385.32
```
#### Append data to files
above, the file is overwritten everytime you write to it. sometimes you don't want that. You want to append the data to the file, not replace it entirely. 
* Append data with the `File.appendAllText` method.
```C#
var data = JsonConvert.DeserializeObject<SalesTotal>(salesJson);

File.AppendAllText($"salesTotalDir{Path.DirectorySeparatorChar}totals.txt", $"{data.Total}{Environment.NewLine}");

// totals.txt
// 22385.32
// 22385.32
```
> TIP: `Environemt.NewLine` prompts .NET to put the value on its own line. if you didn't pass this value, you get the numbers squished together on the same line.

## REST
Representational State Transfer (REST)
* `GET`: Retrieve data from the web service
* `POST`: Create a new item of data on the web service.
* `PUT`: Update an item of data on the web service.
* `PATCH`: Update an item of data on the web service by describing a set of instructions about how the item should be modified.
* `DELETE`: Delete an item of data

### RESTful APIs
Web services that adhere to `REST`. They are defined through
* a Base URI.
* HTTP methods mentioned above
* A media type for the data, such a JSON or XML

### Benefits
* **Simple serialization**: ASP.NET automatically converts your classes into properly formatted JSON for endpoints, requiring no extra setup. Customization is possible for unique endpoint needs.
* **Authentication and authorization**: API endpoints support industry-standard JSON Web Tokens (JWTs) for security. Policy-based authorization allows flexible access control rule creation in code.
* **Routing alongside your code**:ASP.NET enables route and verb definition with attributes alongside your code. Data from path, query, and body are bound to method parameters
* **HTTPS by default**: ASP.NET supports HTTPS by default. It generates a test certification and facilitates local HTTPS setup. ensuring secure debugging before publication.

# Creating WEB APIs 
In the terminal window paste the following command.
```.NET CLI
dotnet new webapi -f net6.0
```
#### Files and directories
* **Controllers/**: Contains classes with public methods exposed as HTTP endpoints
* **Program.cs**: Configures services and the app's HTTP request pipeline, and contains the apps managed entry point
* **ContosoPizza.csprog**: Contains configuration metadata for the project.

> **.NET HTTP REPL.**: `read-evaluate-print-loop`.it is a simple and popular way to build interactice command-line enviroments.

### Build and test the web API
1. Run the following command in the command shell:
```.NET CLI
dotnet run
```
this:
* *Locates* the project file at the current directory.
* *Retrieves* and installs any required project dependencies for this project.
* *Compiles* the project code.
* *Hosts* the web API at both an HTTP and HTTPS endpoint
    * A port from 5000 to 5300 will be selected for HTTP, and from 7000 to 7300 for HTTPS

## Debugging
A debugger helps you analyze and control your programs execution

> Show or hide the debug console by selecting **Ctrl+Shift+Y**
### Breakpoints
* Add a breakpoint by clicking on the left side of the line number, on the line you want to break.
    * Right clicking lets you *add conditional breakpoints*. only becoming active when the condition is met. 
* in the `breakpoints` panel you can see and toggel all the breakpoints in your code, toggle options to break on caught or uncaught exceptions, examine your program state and trace back the source of an exception by using the `call stack`

### Launch Controls
![Alt text](https://learn.microsoft.com/en-us/training/modules/dotnet-debug/media/sidebar-controls.png)
1. Start debugging
2. Select the active launch configuration
3. edit/create the `launch.json` file
4. Open the debug terminal

### Variable States
* **Local Variables**: Accesible in the current scope. Usuall the current function
* **Global Variables**: Accesible from everywhere in the program. System objects from JS runtime are also included. lots of stuff
* **Closure Variables**: Accesible from the current closure, if any. A closure combines the local scope of a function with the scope from the outer function it belongs to.
> you can unfold scopes and variables by selecting the arrow and hovering over a function parameter to peek at its value.

### Watch Variables
select the `+` button to enter a variable name or an expression to watch. **OR** right click the variable in the in the variables panel and select *Add to watch*

### Call Stack
Every time your program enters a function, an entry is added to the `call stack`. In complicated programs it represents the trail of function calls. These can be hard to decipher which is why the `call stack` panel comes in handy. filtering out unwanted information.

### Control execution 
You can control the execution flow of your program by using these controls:
![Alt text](https://learn.microsoft.com/en-us/training/modules/dotnet-debug/media/debugger-controls.png)
* **Continue or pause execution**: continue until the next breakpoint is hit, or pause execution.
* **Step over**: Executes the next code statement
* **Step into**: if next statement is a function call, move on to the first code statement in this function.
* **Step out**: If inside a function, execute the reamaining code of this function and jump back to the statement after the intial function cal
* **Restart**: resart from beginning
* **Stop**: End execution

> #### Warning:
>if running a .NET console application do the following. the debug console does not accept terinal input for a running console
>
> 1. Open *.vscode/launch.json*
> 2. change 
> ```JSON
> "console": "internalconsole",
> ```
> to 
> ```JSON
> "console": "integratedTerminal",
> ```
> 3. save
