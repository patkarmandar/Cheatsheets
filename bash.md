
# Bash -

## Table Of Content :
* [Usefull Commands](#usefull-commands)
* [Organizing Files](#organizing-files)
* [CLI Inputs and Output](#cli-inputs-and-output)
* [Variables Declaration](#variables-declaration)
* [Shell Functions and Scripts](#shell-functions-and-scripts)
* [File Permissions](#file-permissions)
* [Bash Aliases](#bash-aliases)
* [Output Redirection](#output-redirection)
* [Pipelines](#pipelines)
* [Find](#find)
* [Grep](#grep)
* [Regex](#regex)
* [Conditionals and Loops](#conditionals-and-loops)


<br>


## Usefull Commands

| Commands | Info |
| --- | --- |
| `clear` | clear screen |
| `exit` | exit terminal |
| `exit x` | exit terminal with exit status, where x\>=0 |
| `sudo su` | open shell in root |
| `history` | print command history |
| `history x` | print last x command history |
| `!!` or `!$` | repeat previous command |
| `!x` | run xth command |
| `!-x` | run last xth command |
| `man command` | show system' manual page (man) for program/command |
| `whoami` | print current user |
| `who` | print all logged on users on pc |
| `users` | print all users on pc |
| `id -u` | print user id (0 for root user) |
| `file file` | print file type |
| `stat file` | print file system & status of file |
| `which command` | show command full path on system |
| `locate file` | locate file by name |
| `tree dir` | print directory tree |
| `uname` | print system OS name |
| `uname -a` | print all system OS info |
| `tty` | print file name of terminal connected to standard input |
| `echo $TERM` | print terminal type |
| `reset` | resets terminal mode |
| `du` | print disk usage |
| `df `| print disk free |
| `free` | print free memory |
| `ps` | print running process |
| `top` | print running process in recursive manner |
| `top -n x` | print only x page |
| `kill process-id` | kill process |
| `cal` | display calender |
| `date` | display system date |
| `echo $(date +%D)` | print date in dd/mm/yy format |
| `passwd` | change password of current user |
| `logout` | logout active user |
| `poweroff` | poweroff pc |
| `shutdown` | shutdown pc |
| `reboot` | reboot pc |
| `sleep x` | sleep terminal for x sec |



## Organizing Files

| Commands | Info |
| --- | --- |
| `pwd` | print present working dir |
| `ls` | list files in dir except hidden |
| `ls dir` | list files in dir |
| `ls -a` | print all include hidden |
| `ls -l` | print long list format |
| `touch file` | create empty file |
| `touch -c file` | modify access time if file exist but doesn\`t create new file |
| `cd dir` | change dir |
| `cd` or `cd ~` | change to home dir |
| `cd -` | change to last dir & print path |
| `cd ..` | change to one level above current dir |
| `mkdir dir` | create dir |
| `mkdir -p dir1/dir2` | create dir2 inside non-existed dir1 |
| `rm file` | remove file |
| `rm -rf file` | remove non-empty file & dir |
| `rmdir dir` | remove empty dir |
| `cp source destination` | copy file from source to destination |
| `cp -r dir1 dir2` | copy folder & its content recursively |
| `mv old-name new-name` | rename OR move file/dir |
| `cat file` | show content |
| `tac file` | show content in reverse by line |
| `head file` | show first lines of file |
| `head -x file` | show first x lines |
| `tail file` | show end lines of file |
| `tail -x file` | show end x lines of file |
| `less file` | show file content, 1 page at time in scrollable manner |
| `more file` | browse through file |
| `sort file` | display content in alphabetical sort |
| `uniq file` | print unique line from file.txt (suppress duplicate lines) |
| `nl file` | print line no at each line |
| `wc file` | print line, word, byte counts |
| `wc -l file` | count no lines (`m-char, c-byte, w-word`) |



## CLI Inputs and Output

### Input :

- `read var` : input (STDIN)
- `read -p 'Username : ' var` : prompt input
- `read -sp 'Password : ' var` : secure prompt input
- `read -n x var` : allow only x number of input char
- `read -a array` : accept array input


### Output :

- `echo "message"` : print message to STDOUT
- `echo -e "\n some text"` : allow special char in echo
- `printf "some text"` : print message to STDOUT



## Variables Declaration

- Declare Variable : `var="hello"` OR `var=12`
- Access Value : `$var` OR `${var}`
- Remove variable : `unset var`
- Read only variable : `readonly var`

Ex :
```
var="World"
var2=007

echo "Hello $var"
echo "Mandar${var2}!"
```


### Arrays :

- Declare array : `array=("I" "am" "Mandar" 007 )`
- Input Array : `read -a array`
- Assign Value : `array[0]="hello"`
- Access Array Element : `${array[0]}`
- Length Of Array : `length=${#array[@]}`

Ex :
```
message=("hello" "world" "guys")

for (( i=0; i<3; i++ ))
do
    echo ${message[i]}
done
```



## Shell Functions and Scripts

**Syntax :**
```
function-name(){
    #statements
}
```

**Calling Function :** `function-name`


Ex :
```
greet(){
    echo "Hello!"
}
# Call -
greet

# Function with Parameter :
greet(){
    echo "Hello $1"
}
# Call -
greet Mandar

# Call within statement -
echo $(greet)
echo `greet`
```


| CLI Arguments | Info |
| --- | --- |
| `$0` | returns name of script |
| `basename $0` | returns name of script without leading path |
| `$1` to `$x` | returns arguments pass to function or script |
| `$#` | returns total number of arguments |
| `$$` | returns PID of script |
| `$?` | returns exit status of last command or script |
| `$∗` | returns all the arguments (stored in single string) |
| `$@` | same as $∗, but differ when enclosed in ("), (stored as array) |


**Note :**
1. Escape character ie backslash (\\) is use to remove special meaning of char : `\$` or `\>`
2. Commands inside quote (\`) or \$() are interpreted : path=\`pwd\` &amp; `echo "Path : $(pwd)"`
3. Arithmetic operations should be in double braces : `count=$((count+1))`
4. Name scripts with .sh extension : `script.sh`
5. Start script with - Shell Bang : `#!/bin/sh`


| Executing Scripts |
| --- |
| `bash script-name` |
| `bash -x script-name` : show each command execution |
| `sh script-name` |
| `./script-name` |
| `source script-name` |



## File Permissions

- `chmod user+permission file` : change file permission
- `chmod -R user+permission file` : change file permission recursively


**Format of permissions :** -rwx r-- r--
- 1st bit is file type
- 2nd 3 bits are user permission
- 3rd 3 bits are group permission
- 4th 3 bits are others permission

| Options | Description |
| --- | --- |
| file type | - (regular file), d (dir), c (block device), l (symbolic link) |
| setting permission | + (add), - (remove), = (assign) |
| permission | r (read), w (write), x (execute), - (no permission) |
| owner | u (user), g (group), o (other), a (all three) |


### Setting permissions using integers :

| Permission | Value |
| --- | --- |
| r | 4 |
| w | 2 |
| x | 1 |
| - | 0 |

| Permission Value | Permission | Info |
| --- | --- | --- |
| 7 | rwx | read, write & execute |
| 6 | rw- | read & write |
| 5 | r-x | read & execute |
| 4 | r-- | read-only |
| 3 | -wx | write & execute |
| 2 | -w- | write only |
| 1 | --x | execute only |
| 0 | --- | none |

**Note : max value is r+w+x = 4+2+1 = 7**

- wrx wrx --- = 4+2+1 4+2+1 0+0+0 = 770
- r-x r-- r-- = 4+0+1 4+0+0 4+0+0 = 544


Ex :
```
chmod u+wr-r text.txt
chmod o+wrx script.sh

# Using Numbers -
chmod 777 file.sh
```



## Bash Aliases

Redefine aliases by assigning command to word or short-name as substitution or short-cut.

**Synatx :** `alias short-name='command'`

**Note :** save aliases in .bashrc file (in home directory) & execute file with
> source .bashrc

Ex :
```
alias repo='cd /document/github/repo'
```



## Output Redirection

| Commands | info |
| --- | --- |
| `command > file` | redirect output (STDOUT) to file |
| `command >> file` | redirect & append output (STDOUT) to file |
| `echo > file` | create empty file |
| `> file` | create empty file |
| `cat > file` | create file - press CTRL+C to exit typing |
| `cat file > file2` | copy content of file to file2 |
| `cat file >> file2` | concantenate content of file to file2 |
| `command > /dev/null` | redirect STDOUT to null |
| `command > /dev/null 2>&1` | redirect STDOUT & STDERR to null |
| `command &>/dev/null` | redirect STDOUT & STDERR to null |
| `command >/dev/null 2>/dev/null` | redirect STDOUT & STDERR to null |

**NOTE :**
1. 0 is STDIN, 1 is STDOUT, 2 is STDERR (0,1,2 are global file descriptor)
2. /dev/null is special device everything redirects to it is completely lost.


### Define own File Descriptor & Redirect to it :

- Define/Create output file descriptor with x and redirect to file : `exec x<> file`
- Redirect to it : `command >&x`
- Undefine/Close output file descriptor x : `exec x>&-`

Ex :
```
$ exec 3<> log.txt
$ echo "Hello" >&3 #output is redirect to log.txt
$ cat log.txt
Hello

$ exec 3>&-
```



## Pipelines

Pipeline or pipes (|) are used as funnel to pass output of one command to another command as input or parameter.

**Syntax :** `command | command`

Ex :
```
# Output 1 page at time -
ls -iR | less

# Display 10 rows -
ls -it | head -10

# Print line matched word "hello" in file.txt -
cat file.txt | grep hello

# Sort output file names and print only unique file name -
grep -l int *.cpp | sort | uniq
```



## Find

Search for files in directory hierarchy.

**Syntax :** `find path -option file`

- `find /home/user/documents -name file.txt` : find "file.txt" and is case sensitive
- `find . -iname file.txt` : find "file.txt" and is case insensitive
- `find . -iname "*.cpp"` : find files with ".cpp" extension and is case insensitive
- `find . -maxdepth 2 -iname "*.cpp"` : find files with ".cpp" extension in 2 level depth only and is case insensitive
- `find . -not -iname "*.cpp"` : find all files except with ".cpp" extension and is case insensitive
- `find / -mtime 10` : find files which modified within last 10 hours
- `find / -atime 10` : find files whose access time is within last 10 hours
- `find / -cmin 10` : find files which created within last 10 min



## Grep

Global regular expression print (grep) print lines that match patterns from text or file.

**Syntax :** `grep -option pattern file`

- `grep hello file.txt` : match for "hello" in file.txt and print found
- `grep -i hello file.txt` : match for "hello" in file.txt in insensitive way
- `grep -r hello file.txt` : match for "hello" in file.txt recursively
- `grep -v hello *` : match for all folders & files which doesn\`t have "hello"
- `grep -c hello file.txt` : count no of occurance of "hello" in file.txt
- `grep -w hello file.txt` : match for "hello" in file.txt and select only matched word lines
- `grep -n hello file.txt` : match for "hello" in file.txt and print line number with matched lines
- `grep -l int *.cpp` : suppress normal output of matched case and instead print name of each input file having match "int"
- `grep -B 2 -A 3 hello file.txt` : print before 2 lines and after 3 lines of matched case
- `grep -E -w 'hello|HELLO' file.txt` : match for "hello" or "HELLO" in file.txt & w select only matched word lines, E will treat it as regex



## Regex

Regular expressions for pattern matching

- `grep ^The file.txt` : print line start with "The"
- `grep The^ file.txt` : print line end with "The"
- `grep [Hh]ello file.txt` : match for "Hello" or "hello" and print found
- `ls file[0-9]` - file1 file5 : print all with name file[0 to 9]
- `grep '[0-9][0-9][0-9][0-9]' file.txt` : match for 4 digit number from file.txt with range 0-9
- `ls *[0-9]*` - file1.txt test2.sh note5.pdf test_20 : print all with contain no 0 to 9
- `ls test.*` - test.txt test.pdf : print all start with "test"
- `ls ab*` - ab.txt abcd abort.sh : print all start with "ab"
- `ls {*.pdf,*.doc,*.exe}` - file.txt project.doc run.exe : print all with extension pdf/doc/exe
- `ls a[a-d]b` - abd acd : print all with name betn a[a to d]b
- `ls test_[!3]` - test test_2 test_4 : print all with any no except 3



## Conditionals and Loops

**Note :**
1. Conditional expressions should in square braces []
2. Space must be given between operands and operator


| Operator | Operation |
| --- | --- |
| `! expression` | not |
| `expression \|\| expression` or `expression -o expression` | or |
| `expression && expression` or `expression -a expression` | and |
| `( expression )` | grouping expressions |


### Numerical Comparison :

| Operator | Operation |
| --- | --- |
| `expression -eq expression` | equal |
| `expression -ne expression` | not equal |
| `expression -gt expression` | greater than |
| `expression -lt expression` | less than |
| `expression -ge expression` | greater than or equal |
| `expression -le expression` | less than or equal |

Ex :
```
if [ 80 -gt 40 ]
then
    echo "greater"
fi
```


### String Comparison :

| Operator | Operation |
| --- | --- |
| `string1 = string2` | equal |
| `string1 != string2` | not equal |
| `string1 == string2` | equal for pattern matching |
| `-n string` | true if length of string is nonzero |
| `-z string` | true if length of string is zero |

Ex :
```
if [ "Hello" = "Hi" ]
then
    echo "same"
else
    echo "different"
fi
```


### Lexicographic Comparison :

| Operator | Operation |
| --- | --- |
| `string > string` | left string is greater than right in alphabetical order |
| `string < string` | right string is greater than left string in alphabetical order |


### Testing Files :

| Operator | Operation |
| --- | --- |
| `-e file` | true if file exists |
| `-f file` | true if file exists and is regular file |
| `-d file` | true if file exists and is directory |
| `-s file` | true if size of file is greater than zero |
| `-c file` | true if file exists and is character file |
| `-b file` | true if file exists and is block file |
| `-r file` | true if file exists and read permission is granted |
| `-w file` | true if file exists and write permission is granted |
| `-x file` | true if file exists and execute permission is granted |

Ex :
```
if [ -f text.txt ]
then
    echo "text.txt exists and it is regular file"
fi
```


### Bash Ranges :

- `echo {1,2,3}` : 1 2 3
- `echo {1..3}` : 1 2 3
- `echo {1..-3}` : 1 0 -1 -2 -3
- `echo {A..D}` : A B C D
- `echo a{2..5}b` : a2b a3b a4b a5b
- `echo a, b, c, d{1..3}, e` : a, b, c, d1, d2, d3, e


### &gt; Conditionals

### If Statement :
```
# Syntax :
if [ condition ]
then
    statement
fi

# OR condition
if [ condition ] || [ condition ]
then
    statement
fi

# AND condition
if [ condition ] && [ condition ]
then
    statement
fi
```

### If-Else Statement :
```
# Syntax :
if [ condition ]
then
    statement
else
    statement
fi


# Ex-
if [ $name = "mandar" ]
then
    echo "Hello TG"
else
    echo "Who Are You?"
fi
```

### Elif Statements :
```
# Syntax :
If [ condition ]
then
    statement
elif [ condition ]
then
    statement
else
    statement
fi
```

### Switch Statement :
```
# Syntax :
case "$var" in
"case 1")
    statement
    ;;
"case 2")
    statement
    ;;
*)
    Default Statement
    ;;
esac
```


### &gt; Loops

### While Loop :
```
# Syntax :
while [ condition ]
do
    statement
done


# Ex-
(1)
# print "hello" 5 times
count=0
while [ $count -lt 5 ]
do
    echo "hello"
    sleep 1
    count=$((count+1))
done

(2)
# print file content line by line
cat file.txt | while read line
do
    echo $line
done

(3)
while read line
do
    echo $line
done < file.txt

(4)
# infinite loop
while true # 1 instead of true also works
do
    echo "infinite loop"
done

(5)
while :
do
    echo "infinite loop"
    sleep 1
done
```

### For Loop :
```
# Syntax :
for var in expression
do
    statement
done


# Ex-
(1)
# input array and print
read -a array
for i in ${array[@]}
do
    echo "input is $i"
done

(2)
for i in 1 2 3 4 5
do
    echo $i
done

(3)
for i in {1..25}
do
    echo $i
done

(4)
# increment by 2 from 0 to 10
for i in {0..10..2}
do
    echo $i
done

(5)
# increment by 2 from 0 to 20
for i in $(seq 0 2 20)
do
    echo $i
done

(6)
for i in `seq 1 10`
do
    echo $i
done

(7)
# increment by 1 upto 5
for (( i=1; i<=5; i++ ))
do
    echo $i
done

(8)
# infinite loop
for (( ; ; ))
do
    echo "infinite loop"
done

(9)
# create 10 copies of test.txt
for i in `seq 1 10`
do
    cp test.txt "test_${i}.txt"
done

OR

# single line format
for i in `seq 1 10`; do cp test.txt "test_${i}.txt"; done
```

### Until  Loop :
Executes until condition is false
```
# Syntax :
until [ condition ]
do
    statement
done

# Ex-
count=3
until [ $count -le 0 ]
do
    count=$((count-1))
    echo "count = $count"
    sleep 1
done
```

### Select Loop :
```
# Syntax :
select VAR in expressions
do
    statements
done

# Ex-
select DRINK in tea cofee water juice appe all none
do
    case $DRINK in
    tea|cofee|water|all)
        echo "Go to canteen"
        ;;
    juice|appe)
        echo "Available at home"
        ;;
    none)
        break
        ;;
    *)
        echo "ERROR: Invalid selection"
        ;;
    esac
done
```
