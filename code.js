function binarySearch(list, element) {
    let min = 0;
    let max = list.length - 1;
    
    if (list.length=1 && list[0]===element)
    {return 0;}
    
    while (min <= max)
    {
        let guess = Math.floor(((max+min)/2));
        if (element === list[guess])
            {return guess;}
        else if (element > list[guess])
            {min = guess+1;}
        else
            {max = guess-1;}
    }

    return -1;
}
