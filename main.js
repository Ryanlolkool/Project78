var images = ["https://th.bing.com/th/id/OIP.bo1B4yjCiw9Hp4JL1t-7gQAAAA?w=207&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7","https://th.bing.com/th/id/OIP.9xT21ijDOW-mNuNcoWf-_QHaPL?w=170&h=350&c=7&r=0&o=5&dpr=1.5&pid=1.7", "https://th.bing.com/th/id/OIP.uOSm7juDZyoKP-96XKAQZQAAAA?w=159&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" , "https://th.bing.com/th/id/OIP.HOpdVbxgI0DZgoQiw4RYFQHaH9?w=160&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", "https://th.bing.com/th/id/OIP.z7I8mqBclWGcKILTjIPJYQHaF7?w=214&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"];
var names = ["Family Book","Darryl Francis", "Ryan Darryl Francis", "Rossane Darryl Francis", "Angel Prem"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}