function change_data(){


    if (document.getElementsByTagName('p')[4].innerHTML==='GATILLO')
    {
        document.getElementsByTagName('p')[4].innerHTML='ГАТИЛЛО';
        document.getElementsByTagName('p')[5].innerHTML='ОЛЬГА';
        document.getElementsByTagName('p')[6].innerHTML='ВЛАДИМИРОВНА';
    }
    else if (document.getElementsByTagName('p')[4].innerHTML==='ГАТИЛЛО')
    {
        document.getElementsByTagName('p')[4].innerHTML='GATILLO';
        document.getElementsByTagName('p')[5].innerHTML='OLGA';
        document.getElementsByTagName('p')[6].innerHTML='VLADIMIROVNA';

    }
}

const change = document.getElementById("change")
change.addEventListener("click", change_data)
