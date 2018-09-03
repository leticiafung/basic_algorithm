//bubble sort从小到大排序
//每次循环确定最大位置的数，
function bubble(arr){
	for(let i =0; i < arr.length; i++){
		for(let j = 0;j < arr.length - i -1;j++){
			if(arr[j] > arr[j+1]){
				let temp = arr[j+1] ;
				arr[j+1] =arr[j];
				arr[j] = temp;
			}
		}

	}

}


//insert sort从小到大排序
function insert(arr){
	let len = arr.length;
	for(let i = 0; i< len;i++){
		let j = i-1,
			now = arr[i];//注意这里必须用变量存当前的i,因为下面循环中可能会将arr[i]的值改变。

		while(j >= 0 && now < arr[j]){
			arr[j+1] = arr[j] ;
			j--;
				}
		arr[j+1] = now;
		
	}
	return arr;
}

//归并排序
function merge(input,l ,mid,r){
	let larr = [],
		rarr = [];
	for(let i = 0 ; i < mid - l + 1;i++){
		larr[i] = input[l+i];
	}
	for(let i = 0 ; i < r - mid ;i++){
		rarr[i] = input[mid + 1 + i];
	}
	larr[mid-l+1] = Infinity;
	rarr[r-mid] = Infinity;
	let i = 0,
		j = 0;
	for(let k = l ; k <= r; k++ ){
		if(larr[i] <=rarr[j]){
			input[k] = larr[i];
			i++;

		}
		else{
			input[k] = rarr[j];
			j++;
		}
	}
}

function mergeSort(input,l,r){
	
	if(l < r){
		let med = Math.floor((l+r)/2);
		mergeSort(input,l,med);
		mergeSort(input,med+1,r);
		merge(input,l,med,r);

	}
	
}

//堆排序
//维护最大堆的性质,A是该完全二叉树，i是树节点
function Max_HEAPIFY(A,i,len){
	let left = 2*i + 1;//i从1开始
	let right = 2*i + 2;
	let max = i;
	//const len = A.length;
	if(A[left] > A[max] && left < len){
		max = left;
	}
	if(A[right] > A[max]&& left < len){
		max = right;
	}
	if( i !== max ){
		temp = A[max];
		A[max] = A[i];
		A[i] = temp;
		Max_HEAPIFY(A,max,len);
	}
}
//建堆o(nlgn)
function Build_Max_Heap(A){
	const len = A.length;
	for(let i = Math.floor(len/2) ; i >= 0 ; i--){
		Max_HEAPIFY(A,i,len);
	}
}
function HeapSort(A){
	Build_Max_Heap(A);
	console.log(A);
	let heapLen = A.length - 1;
	for(let i = A.length-1 ; i > 0 ;i--){
		temp = A[i];
		A[i] = A[0];
		A[0] = temp;
		heapLen--;
		// let B = A.slice(0,heapLen);
		// console.log(heapLen);
		// console.log(A);
		Max_HEAPIFY(A,0,heapLen);
	}
}

//快排
function partition(A,l,r){
	let x =Math.floor( Math.random()*(r-l)+l);
	let temp;
	temp = A[x];
	A[x] = A[r];
	A[r] = temp;
	let key = A[r],
		j = l-1;
	for(let i = l ; i < r; i++){
		if(A[i]<= key){
			j++;
			let tp = A[j];
			A[i] = A[j];
			A[j] = tp;
		}
	}
	let tp2 = A[j+1];
	A[j+1] = key;//是j以前是比X小的数，j+1是x的位置！！！
	A[r] = tp2;
	return j+1;

}

function fastSort(A,l,r){
	if(l<r){
		let p = partition(A,l,r);
		fastSort(A,l,p-1);//p已经排好了位置，不考虑p
		fastSort(A,p+1,r);
	}

}
//计数排序

//基数排序

//桶排序


//导出的排序函数
function sortchooser(sortfunc,sortagruments){
	// if(sortfunc)

	// return sort.bind(sortfunc,sortagruments);

}

// module.exports.sortchooser = sortchooser
   
let A= [32,1,3,7,9]
HeapSort(A);
console.log(A);