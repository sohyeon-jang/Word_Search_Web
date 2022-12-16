function Search(){
	

     var sentence=document.getElementById('search').value;//search에서 받은 값 sentence에 저장
     console.log(sentence);//sentence에 저장된 값 console로 송출

     var category=document.getElementById('category').value;//category에서 받은 값 type에 저장
	var req={'sentence': sentence, 'category': category}//req는 sentence와 category의 값을 저장하는 변수

    var requestBody=JSON.stringify(req)//req의 값을 JSON 문자열로 변환

	let result = fetch('http://13.125.244.6:3001/word', {
		method : 'POST', body :  JSON.stringify({'sentence': sentence, 'category': category}) 
		})
    result.then(function(response) {
      console.log('response', response)
      return response.text()//결과 값을 text 형식으로 반환
    }).then(function(text) {
      console.log('got text', text)
			let resp = JSON.parse(text);
      console.log('got resp', resp)
			
		
			// create table
			var table = document.createElement("table");  //makes a table element for the page
	    let innerT = "";
	    
	    innerT += "<tr class='firstRow'><th class='tCategory'>분야</th><th>단어</th><th>단어 뜻</th></tr>";  //adds the first row that contains the sections for the table
		console.log(resp.length-1)
	    for (var i = resp.length-1; i >= 0; i--)  //loops through the array 
	    {
	        //add info from the array into this
	        innerT += "<tr><td>"+resp[i].category+"</td><td>"
			+"<a href="+resp[i].dic_link+">"+resp[i].word +"</a>"+"</td><td>"+"『"+resp[i].grammar+"』  "+resp[i].description+"</td>";
			
	    };
			console.log('innerT', innerT);
	    table.innerHTML = innerT;
			
			console.log('innerT', innerT);
	    document.body.append(table);
			
    }).catch(function(ex) {
      console.log('failed', ex)
    });
}

function Category(){
    console.log("카테고리");
    
}