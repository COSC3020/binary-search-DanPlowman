function binarySearch(list, element) {
    let min = 0;
    let max = list.length - 1;
    let guess = list[0];
    while (min != max)
    {
        let guess = Math.ceil(((max+min)/2));
        if (element > list[guess])
            {min = guess+1;}
        else
            {max = guess-1;}
    }
    if (element === list[guess])
            {return guess;}
    else
    {return -1;}
}
