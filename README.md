# .NET
## .NET Ecosystem
The term *ecosystem* encompasses the different elements of an application. These elemts combine to make .NET a compelling platform to learn and build applications.
## Languages and Compilers
* Developers utilize .NET languages such a C# and F# to write source code, which contains instructions for the computers actions during the program execution.
* prior to execution, code needs to be compiled by the .NET compiler into intermediate language(IL),, and saved in a .NET assembly
* Compiling the IL allows code to be platform-independent, running on various systems regardless of OS

## C# vs .NET
* C# is a **programming language**, while .NET is an **ecosystem**
*  c# allows referencing and calling methods from .NET code libraries (assemblies).
* The C# Compiler from the .NET SDK generates
.NET assemblies, which are executeed by the .NET runtime.

## How .NET works at runtime
The .NET runtime is like a protective bubble that provides a run enviornment for the app.
* Compiles the intermediate code into a binary format the first time the program runs. This binary format is specific to the computer its running on.
* Locates the programs entry point and begins running each instruction in the proper sequence.
* Manages computer resources like memory and network access.
* Secures the users computer from software thar has potentially malicious intent, it also provides a layer of isolation between applications.

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
What happens after the code you write in inserted into a main() method. it happens on the server on your behalf
1. A command to compile your new code invokes the C# compiler
2. The C# compiler  ensures your code can be compiled and is free from errors. if it does and error message will output.
3. if successful the .NET runtime opens the newly compiled .NET assembly. By default it looks in a class names `program` to find a method named `Main()` to begin running the instructions
4. instruction by instruction, the .NET runtime evaluates each line of code. it runs the instruction and moves to the next line of code.
5. In this case, when the instruction to print the words "Hello world!" finishes, the runtime path continues to the next line but find nothing. The path ends, and the .NET runtime removes the program from its memory. Meanwhile, the output from the WriteLine() instruction is delivered back to your web browser

# File Systems
You can use .NET to find and return information about files and folders.

