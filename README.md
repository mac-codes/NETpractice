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


