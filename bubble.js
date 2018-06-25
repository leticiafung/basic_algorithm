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
？
//快排
function partition(A,l,r){
	var x =Math.floor( Math.random()*(r-l)+l);
	var temp;
	temp = A[x];
	A[x] = A[r];
	A[r] = temp;
	var key = A[r],
		j = l-1;
	for(var i = l ; i < r; i++){
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
		var p = partition(A,l,r);
		fastSort(A,l,p-1);//p已经排好了位置，不考虑p
		fastSort(A,p+1,r);
	}

}
//计数排序

//基数排序

//桶排序



   
