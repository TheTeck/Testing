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
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
    const result = [];
    const lLen = left.length;
    const rLen = right.length;
    let lIdx = 0;
    let rIdx = 0;

    while (lIdx < lLen && rIdx < rLen) {
        if (left[lIdx] < right[rIdx]) {
            result.push(left[lIdx++]);
        } else {
            result.push(right[rIdx++]);
        }
    }
    return result.concat(left.slice(lIdx), right.slice(rIdx));
}

// quick sort - O(n^2) - unstable
function quickSort (arr, left, right) {
    const len = arr.length;
    if (left < right) {
        const pivot = right;
        const partitionIndex = partition(arr, pivot, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}

function partition (arr, pivot, left, right) {
    const pivotValue = arr[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap (arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.clear();

console.log("%c> Bubble Sort - O(n^2)", "color: green");
console.log(bubbleSort([54,76543,323,5453,645,2,7455,3457,7565,345,532656,787]));

console.log("\n%c> Selection Sort - O(n^2)", "color: green");
console.log(selectionSort([54,76543,323,5453,645,2,7455,3457,7565,345,532656,787]));

console.log("\n%c> Insertion Sort - O(n^2)", "color: green");
console.log(insertionSort([54,76543,323,5453,645,2,7455,3457,7565,345,532656,787]));

console.log("\n%c> Merge Sort - O(nlogn)", "color: green");
console.log(mergeSort([54,76543,323,5453,645,2,7455,3457,7565,345,532656,787]));

console.log("\n%c> Quick Sort - O(n^2)", "color: green");
console.log(quickSort([54,76543,323,5453,645,2,7455,3457,7565,345,532656,787], 0, 11));