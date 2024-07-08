let input = document.getElementById("input");
        let battons = document.querySelectorAll("button")
        let string = "";
        let arr = Array.from(battons)
        // console.log(arr);
        arr.forEach(button=>{
            button.addEventListener("click",(e)=>{
                // console.log(e.target.innerHTML);
                if(e.target.innerHTML == "="){
                    // string = "0";
                    string = eval(string);
                    input.value =string;
                }
                else if(e.target.innerHTML == "AC"){
                    string = "0";
                    input.value = string;
                }
                else if (e.target.innerHTML == "DEL"){
                    string = string.substring(0,string.length-1);
                    input.value = string;
                }
                else{
                    string += e.target.innerHTML;
                    input.value = string;
                    // console.log(input.value);
                }
            })

        })