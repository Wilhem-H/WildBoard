function Tools(){

    const tools = [{name:"Odyssey",link:"https://odyssey.wildcodeschool.com/",img:""},{name:"Slack",link:"https://app.slack.com/client/T6SG2QGG2/C04QMQPS0MA/thread/C04QMQPS0MA-1682777525.981379",img:""},{name:"Google meet",link:"https://meet.google.com/qki-zcjy-wsf?pli=1",img:""},{name:"Github",link:"https://github.com/",img:""},{name:"Google Drive",link:"https://drive.google.com/drive/folders/14tXIpvlHcrW_U5f_yyGYSQ6EGb2s47D3",img:""},{name:"Figma",link:"https://www.figma.com/fr/",img:""},{name:"Trello",link:"https://trello.com/fr",img:""}]

    return (
        <>
            {tools.map(t => 
            <div key={t.name} className="toolsbox">
                <img src={t.img} alt={t.name}/>
                <a href={t.link} target="_blank">{t.name}</a>
            </div>
            )}
        </>
    )
}

export default Tools