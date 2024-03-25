const convertToSeconds = (hours, minutes, seconds)=>{
    return (hours * 3600 + minutes * 60 + seconds * 1);
  }
  
  const processUrl = ()=>{
    let url = document.querySelector("input[name='url']").value;
    let startHours = document.querySelector("input[name='starthours']").value;
    let startMinutes = document.querySelector("input[name='startminutes']").value;
    let startSeconds = document.querySelector("input[name='startseconds']").value;
    
    let endHours = document.querySelector("input[name='endhours']").value;
    let endMinutes = document.querySelector("input[name='endminutes']").value;
    let endSeconds = document.querySelector("input[name='endseconds']").value;
    
    let startTime = convertToSeconds(startHours, startMinutes, startSeconds);
    
    let endTime = convertToSeconds(endHours, endMinutes, endSeconds);
    
    let splitString = url.split("v=");
    console.log("SPLIT STRING: " + splitString[1]);
    let trimmedString = splitString[1].slice(0, 11);
    console.log("TRIMMED STRING: " + trimmedString);
    
    for(let i = 0; i < splitString.length; i++){
      console.log("Number " + i + ": " +  splitString[i]);
    }
    
    let newUrl = `https://www.youtube.com/embed/${trimmedString}?start=${startTime}&end=${endTime}`;
    
    console.log("NEW URL: " + newUrl);
    const urlLink = document.createElement("a");
    urlLink.href = newUrl;
    urlLink.textContent = "YOUR LINK";
    document.body.append(urlLink)
  }
  
  const submitButton = document.querySelector("button");
  
  submitButton.addEventListener("click", (e)=>{
    e.preventDefault();
    processUrl();
  });