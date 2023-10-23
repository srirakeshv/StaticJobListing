const jobDetails=[
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]


let main=document.querySelector('main')
function createDivElement(index){
    let divElement=document.createElement('div')
    divElement.className='container'
    divElement.innerHTML=  `
    <div class="image">
        <div class="img"><img src="" alt=""></div>
        <div class="text">
            <div class="text-head">
                <p class="title"></p>
                <p class="title"></p>
                <p class="title"></p>
            </div>
            <p class="text-middle"></p>
            <div class="text-last">
                <p></p>
                <p>.</p>
                <p></p>
                <p>.</p>
                <p></p>
            </div>
        </div>
    </div>
    <div class="content">
        <p class='hint'></p>
        <p class='hint'></p>
        <div class="content-hint">
            
        </div>
    </div>
    `
    
    let image=divElement.querySelector('.img img')
    let title=divElement.querySelectorAll('.title')
    let middleText=divElement.querySelector('.text-middle')
    let jobDescription=divElement.querySelectorAll('.text-last p')
    let keyWords=divElement.querySelectorAll('.content .hint')
    let language=divElement.querySelector('.content-hint')

    // language elements
    function createParaElement(jindex)
    {
        let paraElement=document.createElement('p')
        paraElement.innerHTML=jobDetails[index].languages[jindex]
        language.appendChild(paraElement)
    }

    // image
    image.src=jobDetails[index].logo
    middleText.innerHTML=jobDetails[index].position
    // job title
    title.forEach((t,ind)=>{
        let num=''
        if(ind===0)
        {
            t.innerHTML=jobDetails[index].company
        }
        else if(ind===1)
        {
            num=jobDetails[index].new
            if(num===true)
            {
                t.style.display='block'
                t.innerHTML='new!'
            }
            else{
                t.style.display='none'
            }
        }
        else if(ind===2)
        {
            num=jobDetails[index].featured
            if(num===true)
            {
                t.style.display='block'
                t.innerHTML='featured'
            }
            else{
                t.style.display='none'
            }
        }
    })
    // job description
    jobDescription.forEach((job,ind)=>{
        if(ind===1 || ind===3)
        {
            job.innerHTML='.'
        }
        else{
            if(ind===0)
            {
                job.innerHTML=jobDetails[index].postedAt
            }
            else if(ind===2)
            {
                job.innerHTML=jobDetails[index].contract
            }
            else if(ind===4)
            {
                job.innerHTML=jobDetails[index].location
            }
        }
    })
    keyWords.forEach((key,ind)=>{
        if(ind===0)
        {
            key.innerHTML=jobDetails[index].role
        }
        else if(ind===1)
        {
            key.innerHTML=jobDetails[index].level
        }
        
    })
    // paraelement for languages
    let lengthOfLanguages=jobDetails[index].languages.length
    for (let j=0; j<lengthOfLanguages; j++)
    {
        createParaElement(j)
    }
    
    
    main.appendChild(divElement)

    // div border color
    let totaldiv=document.querySelectorAll('.container')
    if(jobDetails[index].featured)
    {
        totaldiv.forEach(t=>{
            t.style.borderLeft='4px solid hsl(180, 29%, 50%)'
        })
    }

    // input typing
    let inputText=document.querySelector('input')
    let para=language.querySelectorAll('p')
    let content=divElement.querySelector('.content')
    inputText.addEventListener('input',()=>{
        let inputValue=inputText.value.split(',')
        let hashMatch=false
        if(inputText.value==='')
        {
            divElement.style.display='flex'
        }
        else{

            for(let l=0; l<lengthOfLanguages; l++)
            {
                for(let m=0; m<inputValue.length; m++)
                {
                    if(inputValue[m].toLowerCase()===para[l].innerHTML.toLowerCase())
                    {
                
                        // console.log('y')
                        hashMatch=true
                        break
                    }
                }
                
            }
            divElement.style.display=hashMatch?'':'none'
        }

        // input function
        let key=document.querySelector('.key')
        let clear=document.querySelector('.input p')
        clear.addEventListener('click',()=>{
            
            inputText.value=''
            divElement.style.display='flex'
        })
        
    })
}

// iterating
for (let i=0; i<jobDetails.length; i++)
{
    createDivElement(i)
}


