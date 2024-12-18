# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The worst case run time would be $O(n^2logn)$ because the size variable doubles each time until the end of the array at n which means the loop runs O(logn) times. The in place merge function has 2 loops with each loop being O(n) which would make the runtime for that $O(n^2)$. The total time would be $O(n^2logn)$.

Didn't know where to start on this one, used ChatGPT to write tips/outline on how to start this without code and then wrote the code myself and based some of it off of the slides. Also use geekforgeeks to help explain mergesort more. “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
