function stringObject() {
    let string="Tôi yêu ngôn ngữ lập trình Javascript";
    let array=string.split("");
    let count1 =0,count2=0;

    for (let i=0;i<string.length;i++){
        if(string[i]=='a')
        {
           count1++;
        }
    }
    for (let i=0;i<string.length;i++)
    {
        if(string[i]!=' ')
        {
            count2++;
        }
    }
    console.log(count1);
    console.log(array);
    console.log(count2);
    console.log(string.replace("Javascript", 'Typescript'));
}
