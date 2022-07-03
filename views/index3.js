var stringSimilarity = require("string-similarity");
const { listenerCount } = require("../users");

function arrayMax(array) {
    return array.reduce(function(a, b) {
      return Math.max(a, b);
    });
  }
const mail_list = ["akanksham@iitgn.ac.in"	,
"praneetat@iitgn.ac.in"	,
"nidhis@iitgn.ac.in"	,
"gunjan.m@iitgn.ac.in"	,
"aditia@iitgn.ac.in"	,
"goutamp@iitgn.ac.in"	,
"ritum@iitgn.ac.in"	,
"dhananjay.singh@iitgn.ac.in"	,
"aadishreed@iitgn.ac.in"	,
"priyaj@iitgn.ac.in"	,
"athulkr@iitgn.ac.in"	,
"vimalp@iitgn.ac.in"	,
"shirisha.a@iitgn.ac.in"	,
"ashish.chavan@iitgn.ac.in"	,
"shruti.katpara@iitgn.ac.in"	,
"amitk@iitgn.ac.in"	,
"prasad.athave@iitgn.ac.in"	,
"utkarsh.nanda@iitgn.ac.in"	,
"jani.dhyey@iitgn.ac.in"	,
"lovepreet.singh@iitgn.ac.in"	,
"pradip.prajapati@iitgn.ac.in"	,
"smit.patel@iitgn.ac.in"	,
"ankitam@iitgn.ac.in"	,
"amitt@iitgn.ac.in"	,
"rajpreetk@iitgn.ac.in"	,
"gauravb@iitgn.ac.in"	,
"prashants@iitgn.ac.in"	,
"hiralrl@iitgn.ac.in"	,
"samanawayd@iitgn.ac.in"	,
"abhishek.g@iitgn.ac.in"	,
"surajr@iitgn.ac.in"	,
"pankajk@iitgn.ac.in"	,
"vinod.ku@iitgn.ac.in"	,
"pintup@iitgn.ac.in"	,
"uzma.s@iitgn.ac.in"	,
"vikashk@iitgn.ac.in"	,
"divyanshc@iitgn.ac.in"	,
"javaidr@iitgn.ac.in"	,
"tarishag@iitgn.ac.in"	,
"tarunb@iitgn.ac.in"	,
"ratnikag@iitgn.ac.in"	,
"harshavardhan.g@iitgn.ac.in"	,
"pabitram@iitgn.ac.in"	,
"keshavc@iitgn.ac.in"	,
"anuk@iitgn.ac.in"	,
"prathamesh.vibhute@iitgn.ac.in"	,
"nikhil.murkute@iitgn.ac.in"	,
"nikhil.yadav@iitgn.ac.in"	,
"aastha.jivrajani@iitgn.ac.in"	,
"aarchia@iitgn.ac.in"	,
"sumit.kumar@iitgn.ac.in"	,
"vaishnavi.kokadwar@iitgn.ac.in"	,
"utkarshs@iitgn.ac.in"	,
"kamlesh.arun@iitgn.ac.in"	,
"hirenrs@iitgn.ac.in"	,
"ajinkya.pawar@iitgn.ac.in"	,
"lokeshs@iitgn.ac.in"	,
"pratyush.bhatt@iitgn.ac.in"	,
"sunilkt@iitgn.ac.in"	,
"pushan.patel@iitgn.ac.in"	,
"naseef.p@iitgn.ac.in"	,
"abhijeets@iitgn.ac.in"	,
"abhishekt@iitgn.ac.in"	,
"nikkim@iitgn.ac.in"	,
"deepikad@iitgn.ac.in"	,
"anitaa@iitgn.ac.in"	,
"dasaris@iitgn.ac.in"	,
"shashi.sarraf@iitgn.ac.in"	,
"priyad@iitgn.ac.in"	,
"laxmim@iitgn.ac.in"	,
"jay.shah@iitgn.ac.in"	,
"pratyashab@iitgn.ac.in"	,
"jessica.satyarthi@iitgn.ac.in"	,
"ritu.verma@iitgn.ac.in"	,
"vishwap@iitgn.ac.in"	,
"aakasha@iitgn.ac.in"	,
"rohan.shirodkar@iitgn.ac.in"	,
"varadk@iitgn.ac.in"	,
"jaydeep.ramnani@iitgn.ac.in"	,
"hardik.khichi@iitgn.ac.in"	,
"paresh.mody@iitgn.ac.in"	,
"m.manidhar@iitgn.ac.in"	,
"harin@iitgn.ac.in"	,
"nilesh.thakar@iitgn.ac.in"	,
"aman.18110014@iitgn.ac.in"	,
"dhruvip@iitgn.ac.in"	,
"shardul.kulkarni@iitgn.ac.in"	,
"nitin.gupta@iitgn.ac.in"	,
"meenusa@iitgn.ac.in"	,
"jitendrak@iitgn.ac.in"	,
"hemana@iitgn.ac.in"	,
"gauravp@iitgn.ac.in"	,
"hrushikeshp@iitgn.ac.in"	,
"bazelam@iitgn.ac.in"	,
"priyankap@iitgn.ac.in"	,
"s.ganesh@iitgn.ac.in"	,
"mohammad.syed@iitgn.ac.in"	,
"dilip.khandare@iitgn.ac.in"	,
"amank@iitgn.ac.in"	,
"amarm@iitgn.ac.in"	,
"yashi.gaur@iitgn.ac.in"	,
"aditya.pusalkar@iitgn.ac.in"	,
"siddharthp@iitgn.ac.in"	,
"sanket.vadhvana@iitgn.ac.in"	,
"harish.meghwal@iitgn.ac.in"	,
"venkata.reddy@iitgn.ac.in"	,
"khushwants@iitgn.ac.in"	,
"aishna.agrawal@iitgn.ac.in"	,
"tanmay.jain@iitgn.ac.in"	,
"simrant@iitgn.ac.in"	,
"dhruvi.gondalia@iitgn.ac.in"	,
"vakil.yatharth@iitgn.ac.in"	,
"gaurav.dalmia@iitgn.ac.in"	,
"gokul.raman@iitgn.ac.in"	,
"gupta.prakash@iitgn.ac.in"	,
"janvi.thakkar@iitgn.ac.in"	,
"shah.jay@iitgn.ac.in"	,
"nishikant.parmar@iitgn.ac.in"	,
"aman.sharma@iitgn.ac.in"	,
"keerthyv@iitgn.ac.in"	,
"roopak.sharma@iitgn.ac.in"	,
"meena.ashish@iitgn.ac.in"	,
"devanshis@iitgn.ac.in"	,
"deependrad@iitgn.ac.in"	,
"amar.tiwari@iitgn.ac.in"	,
"vinayr@iitgn.ac.in"	,
"raghav.goyal@iitgn.ac.in"	,
"manish.dave@iitgn.ac.in"	,
"himanshu.18110065@iitgn.ac.in"	,
"khushbup@iitgn.ac.in"	,
"udit.18110176@iitgn.ac.in"	,
"atul.patidar@iitgn.ac.in"	,
"wardha.w@iitgn.ac.in"	,
"amayg@iitgn.ac.in"	,
"dishank.goel@iitgn.ac.in"	,
"pankajp@iitgn.ac.in"	,
"harshits@iitgn.ac.in"	,
"niyatis@iitgn.ac.in"	,
"bhanu.singh@iitgn.ac.in"	,
"mohammad.shahid@iitgn.ac.in"	,
"shashi.18110157@iitgn.ac.in"	,
"pushkar.mujumdar@iitgn.ac.in"	,
"kishan.singh@iitgn.ac.in"	,
"dhruvi.lodhavia@iitgn.ac.in"	,
"kalyan.reddy@iitgn.ac.in"	,
"siddharth.soni@iitgn.ac.in"	,
"remiyar@iitgn.ac.in"	,
"yash.kamble@iitgn.ac.in"	,
"pravin.hivare@alumni.iitgn.ac.in"	,
"rachit.shrimal@iitgn.ac.in"	,
"avinash.18110030@iitgn.ac.in"	,
"yashr@iitgn.ac.in"	,
"vartikam@iitgn.ac.in"	,
"bhanupratapr@iitgn.ac.in"	,
"sachin.yadav@iitgn.ac.in"	,
"bhartim@iitgn.ac.in"	,
"dhanesh.bhutada@iitgn.ac.in"	,
"animeshs@iitgn.ac.in"	,
"manikm@iitgn.ac.in"	,
"rajkg@iitgn.ac.in"	,
"kashisht@iitgn.ac.in"	,
"sitarams@iitgn.ac.in"	,
"rupulc@iitgn.ac.in"	,
"asmitak@iitgn.ac.in"	,
"ayushim@iitgn.ac.in"	,
"kailash.kumar@iitgn.ac.in"	,
"vishnub@iitgn.ac.in"	,
"neelamp@iitgn.ac.in"	,
"srinidhip@iitgn.ac.in"	,
"sachins@iitgn.ac.in"	,
"sandeeps@iitgn.ac.in"	,
"vagisha.18110179@iitgn.ac.in"	,
"devvrat.joshi@iitgn.ac.in"	,
"akangshad@iitgn.ac.in"	,
"srikanthp@iitgn.ac.in"	,
"mukeshg@iitgn.ac.in"	,
"vijays@iitgn.ac.in"	,
"juhis@iitgn.ac.in"	,
"ritikag@iitgn.ac.in"	,
"akanshav@iitgn.ac.in"	,
"aarthim@iitgn.ac.in"	,
"charug@iitgn.ac.in"	,
"tanisha.a@iitgn.ac.in"	,
"nikhil.borase@iitgn.ac.in"	,
"artivishwa@iitgn.ac.in"	,
"viraj.shah@iitgn.ac.in"	,
"prashant.ramteke@iitgn.ac.in"	,
"alpha.topno@iitgn.ac.in"	,
"kshitija.anam@iitgn.ac.in"	,
"laxman.18110093@iitgn.ac.in"	,
"lavanya.naik@iitgn.ac.in"	,
"maitreya.thakur@iitgn.ac.in"	,
"praveen.venkatesh@iitgn.ac.in"	,
"bhavya.gupta@iitgn.ac.in"	,
"harshit.kumar@iitgn.ac.in"	,
"dev.patel@iitgn.ac.in"	,
"vijendra.meena@iitgn.ac.in"	,
"satyar@iitgn.ac.in"	,
"dhruv.bukinkere@iitgn.ac.in"	,
"athirak@iitgn.ac.in"	,
"ayush.lodha@iitgn.ac.in"	,
"venkataprudvi.g@iitgn.ac.in"	,
"lokesht@iitgn.ac.in"	,
"atmadeeps@iitgn.ac.in"	,
"rahul.patel@iitgn.ac.in"	,
"rishi.patidar@iitgn.ac.in"	,
"satyam.kumar@iitgn.ac.in"	,
"vaibhav.sharma@iitgn.ac.in"	,
"priyam.tongia@iitgn.ac.in"	,
"nakumdivyaraj@iitgn.ac.in"	,
"neel.kirankumar@iitgn.ac.in"	,
"anupam.kumar@iitgn.ac.in"	,
"jayesh.khanna@iitgn.ac.in"	,
"aishwarya.malve@iitgn.ac.in"	,
"jhansi.boddu@iitgn.ac.in"	,
"khushi.j@iitgn.ac.in"	,
"yash.meshram@iitgn.ac.in"	,
"sumank@iitgn.ac.in"	,
"suryansh.kumar@iitgn.ac.in"	,
"aditi.gera@iitgn.ac.in"	,
"vijayr@iitgn.ac.in"	,
"prakash.daga@iitgn.ac.in"	,
"sowmya.selva@iitgn.ac.in"	,
"pradeep.saini@iitgn.ac.in"	,
"chris.francis@iitgn.ac.in"	,
"kuntal.patel@iitgn.ac.in"	,
"hariharan.parmar@iitgn.ac.in"	,
"aarish.shah@iitgn.ac.in"	,
"sahil.ingale@iitgn.ac.in"	,
"robin.kumar@iitgn.ac.in"	,
"anas.ali@iitgn.ac.in"	,
"abhiraj.bhasin@iitgn.ac.in"	,
"arpit.kaushal@iitgn.ac.in"	,
"tanmay.sharma@iitgn.ac.in"	,
"ushmag@iitgn.ac.in"	,
"rahulkm@iitgn.ac.in"	,
"sudipd@iitgn.ac.in"	,
"preeti.18110128@iitgn.ac.in"	,
"pranay.katike@iitgn.ac.in"	,
"dhanyasree.g@iitgn.ac.in"	,
"apoorvas@iitgn.ac.in"	,
"srimadhavi.r@alumni.iitgn.ac.in"	,
"madhumitam@iitgn.ac.in"	,
"kaustuvs@iitgn.ac.in"	,
"pranshu.kumar@iitgn.ac.in"	,
"pujarib@iitgn.ac.in"	,
"utsav.pandey@alumni.iitgn.ac.in"	,
"ektaj@iitgn.ac.in"	,
"janhavi.premi@iitgn.ac.in"	,
"rohit.verma@iitgn.ac.in"	,
"mithun.ravichandran@iitgn.ac.in"	,
"varun.jain@iitgn.ac.in"	,
"urmilar@iitgn.ac.in"	,
"bhavesh.solanki@iitgn.ac.in"	,
"aditya.tripathi@iitgn.ac.in"	,
"kushagra.sharma@iitgn.ac.in"	,
"shubhang.trivedi@iitgn.ac.in"	,
"shivam.sahni@iitgn.ac.in"	,
"sakshi.baheti@iitgn.ac.in"	,
"prasanna.d@iitgn.ac.in"	,
"arpit.patel@iitgn.ac.in"	,
"gupta.rahul@iitgn.ac.in"	,
"abhinav.singh@iitgn.ac.in"	,
"preeti.chiluveru@iitgn.ac.in"	,
"parasn@iitgn.ac.in"	,
"kartik.hillal@iitgn.ac.in"	,
"jeevanjyotid@iitgn.ac.in"	,
"aakashp@iitgn.ac.in"	,
"abhinandad@iitgn.ac.in"	,
"amey.kulkarni@iitgn.ac.in"	,
"yogesh.kabra@iitgn.ac.in"	,
"abhinav.meena@iitgn.ac.in"	,
"amish.raj@iitgn.ac.in"	,
"manisha.amireddy@iitgn.ac.in"	,
"ksashin@iitgn.ac.in"	,
"shah.viraj@iitgn.ac.in"	,
"dhruv.menon@iitgn.ac.in"	,
"vivek.modi@iitgn.ac.in"	,
"anjanig@iitgn.ac.in"	,
"khushbook@iitgn.ac.in"	,
"karthik.poreddy@iitgn.ac.in"	,
"rwik.rana@iitgn.ac.in"	,
"shubham.gond@iitgn.ac.in"	,
"hetvi.shastri@iitgn.ac.in"	,
"joshna.gadhavi@iitgn.ac.in"	,
"mihir.jain@iitgn.ac.in"	,
"amit.sunda@iitgn.ac.in"	,
"jaydeep.kakadiya@iitgn.ac.in"	,
"amlin.jose@iitgn.ac.in"	,
"jayesh.salunkhe@iitgn.ac.in"	,
"ayush.kumar@iitgn.ac.in"	,
"souritra.garai@iitgn.ac.in"	,
"hymab@iitgn.ac.in"	,
"devendra.singh@iitgn.ac.in"	,
"mohitk@iitgn.ac.in"	,
"rakeshnaidu.p@iitgn.ac.in"	,
"ritikap@iitgn.ac.in"	,
"poojan.modi@iitgn.ac.in"	,
"palak.purohit@iitgn.ac.in"	,
"vishal.bamania@iitgn.ac.in"	,
"siddarth.maddela@iitgn.ac.in"	,
"prankush.agarwal@iitgn.ac.in"	,
"jitender.kumar@iitgn.ac.in"	,
"tanishque.zaware@iitgn.ac.in"	,
"yuktig@iitgn.ac.in"	,
"shivanshu.sharma@iitgn.ac.in"	,
"navneet.kaur@iitgn.ac.in"	,
"harsh.patel@iitgn.ac.in"	,
"vaibhav.saini@iitgn.ac.in"	,
"vrutik.shah@iitgn.ac.in"	,
"dhruvin.patel@iitgn.ac.in"	,
"srujan.pandya@iitgn.ac.in"	,
"krish.gupta@iitgn.ac.in"	,
"bhanu.jarwal@iitgn.ac.in"	,
"deepesh.pankaj@iitgn.ac.in"	,
"arpita.kabra@iitgn.ac.in"	,
"hitesh.joya@iitgn.ac.in"	,
"unnat.dave@iitgn.ac.in"	,
]
const arr = [] 
for(i=0;i<mail_list.length;i++){
    var similarity = stringSimilarity.compareTwoStrings("mihir", mail_list[i]);
    arr.push(similarity)
}
console.log(arrayMax(arr));
console.log(mail_list[o.indexOf(arrayMax(arr))])
// console.log(Math.max.apply(...o));
