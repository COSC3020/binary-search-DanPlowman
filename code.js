function binarySearch(list, element) {
    var min = 0;
    var max = list.length - 1;
    while (min <= max)
    {
        var guess = Math.floor(max+min/2)
        if (element === list[guess])
            {return guess;}
        else if (element > list[guess])
            {min = guess+1;}
        else
            {max = guess-1;}
    }
    return -1;
}
