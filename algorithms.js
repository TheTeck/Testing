// bubble sort - O(n^2) - stable
function bubbleSort (arr) {
    const len = arr.length;
    for (let i = len - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// selection sort - O(n^2) - unstable
function selectionSort (arr) {
    const len = arr.length;
    for (let i = 0; i < len-1; i++) {
        let lowest = i;
        for (let j = i+1; j < len; j++) {
            if (arr[lowest] > arr[j]) {
                let temp = arr[lowest];
                arr[lowest] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// insertion sort - O(n^2) - stable
function insertionSort (arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let item = arr[i];
        let j = i;

        while (j > 0 && arr[j-1] > item) {
            arr[j] = arr[j-1];
            j--;
        }

        arr[j] = item;
    }

    return arr;
}

// merge sort - O(n*Logn) - stable
function mergeSort (arr) {
    return arr;
}

console.clear();

console.log("%c> Bubble Sort - O(n^2)", "color: green");
console.log(bubbleSort([54,76543,323,5453,645,2,7455,3457,7565,345,532656,787]));

console.log("\n%c> Selection Sort - O(n^2)", "color: green");
console.log(selectionSort([54,76543,323,5453,645,2,7455,3457,7565,345,532656,787]));

console.log("\n%c> Insertion Sort - O(n^2)", "color: green");
console.log(insertionSort([54,76543,323,5453,645,2,7455,3457,7565,345,532656,787]));

console.log("\n%c> Merge Sort - O(n^2)", "color: green");
console.log(mergeSort([54,76543,323,5453,645,2,7455,3457,7565,345,532656,787]));