# Part 2 Answers
1. Line 12 prints out "3" since i is declared using var, so it is in scope of the log statement. Also since the length of list is 3, i will increment until it reaches 3 from for loop.
2. Line 13 prints out "150" because discountedPrice is declared using var, so it is in scope of the log statement. discountedPrice is 150 since it is the last item being manipulated from the list before we exit the for loop.
3. Line 14 prints out "150" because finalPrice is declared using var, so it is in scope of the log statement. finalPrice is 150 since it is discountedPrice * 1 essentially (x * 100 / 100 = x) and we know from the last problem discountedPrice is 150
4. This function will return [50, 100, 150] since it uses the in scope variable discounted, which contains values from the prices except manipulated. With the for loop, the we go through prices and calculate the discounted price to put into the new array. Once we go through the array, we finish and return the new array discounted.
5. This code will cause an error because i is declared using let, which means that i does not exist outside of the for loop
6. This code will casue an error because discountedPrice is only available in the scope of the for loop, so it does not exist outside loop.
7. Line 14 prints out "150" since the variable is in scope as it was declared outside of the loop.
8. This function will return [50, 100, 150] since the variable is in scope and was declared outside the loop, which means we can access it.
9. This code will cause an error because i is declared using let in the for loop, which means it does not exist outside the loop
10. Line 12 prints out "3" because the variable is declared outside the loop, so it is in scope.
11. This function will return [50, 100, 150] because although discounted is const, we can manipulate what is inside of the discounted array
12. a. student.name
    b. student["Grad Year"]
    c. student.greeting() <--- not too sure of this
    d. student['Favorite Teacher'].name
    e.  student.courseLoad[0]
13. a. This outputs '32' since one of them is a string, so it typecasts 2 and returns a string.
    b. This outputs 1 since we are doing subtraction, so it typecasts '3' to integer 3.
    c. This outputs 3 since 3 is an integer and null is typecasted to 0.
    d. This outputs '3null' since '3' is a string and it is a concatenation
    e. This outputs 4 since true maps to 1
    f. This outputs 0 since false maps to 0 and null is typecasted to integer
    g. This outputs '3undefined' since '2' is a string and it is a concatenation
    h. This outputs NaN since '3' is a string and undefined has no value, so you cannot represent this difference as a number
14. a. This outputs true because '2' is evaluated to 2 and 2 is greater than 1
    b. This outputs false because alphabetically, '1' in '12' comes before '2' in '2'
    c. This outputs true because weakcasting will turn the string into a number, so they are both 2
    d. This outputs false because the types of 2 and '2' are different
    e. This outputs false because true evaluates to 1 and 1 is not equal to 2
    f. This outputs true because Boolean(2) evaluates to true, so true and true are equal and the same datatype
15. The difference between == and === is that == compares 2 values loosely which leads to typecasting while === compares the data type as well along with value
16. This code should print out 21, 45, 5, and 2
17. The result should be [2, 4, 6]. When we call modifyArray, we pass through an array [1, 2, 3] and the function do something. From the code, it seems that modifyArray returns an array where all the items in the input array are altered by the input function. When we calll modifyArray, we also input the function doSomething, which returns 2 * a number. So using that function on every input in the array goes from [1, 2, 3] to [2, 4, 6].
18. Code should output time every second
19. The function outputs 1 4 3 2.