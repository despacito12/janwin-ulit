let process = {
	menu:function(){
		let content = <div>
		<div className="navbar">
              <div className="navbar-inner">
                <div className="center">CLASH OF CLAN CHARACTERS</div>
              </div>
            </div>
		
			<ul>
				<li><a href='#' onClick={process.page1}> Giant</a></li>
				<li><a href='#' onClick={process.page2}> Wizard</a></li>
				<li><a href='#' onClick={process.page3}> Valkyrie</a></li>
				<li><a href='#' onClick={process.page4}> Barbarian</a></li>
				<li><a href='#' onClick={process.page5}> Archer</a></li>
				<li><a href='#' onClick={process.page6}> Goblin</a></li>
				<li><a href='#' onClick={process.page7}> Booler</a></li>
				<li><a href='#' onClick={process.page8}> Lava Hound</a></li>
				<li><a href='#' onClick={process.page9}> Miner</a></li>
				<li><a href='#' onClick={process.page10}> WItch</a></li>
				<li><a href='#' onClick={process.page11}> Golem</a></li>
				<li><a href='#' onClick={process.page12}> Baby Dragon</a></li>
				<li><a href='#' onClick={process.page13}> Baloon</a></li>
				<li><a href='#' onClick={process.page14}> Barbarian King </a></li>
				<li><a href='#' onClick={process.page15}> Archer Queen</a></li>

			</ul>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				
	<img src='img/page1.jpg' width='90%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
	<br/><b>Giant</b> <br/>
	Giants prioritize defensive structures above all other targets, and will bypass all other types of enemy buildings and troops while any defenses remain on the battlefield. This is true even if they are under attack by enemy Clan Castle troops, heroes or Skeleton Trap skeletons. Note that like all troops that prioritize defenses, Giants do not consider the Clan Castle to be a defense regardless of whether or not it contains enemy troops, but do consider the defending Grand Warden to be a defensive building. 
Once all defenses are destroyed, they will attack the nearest building to them regardless of type, and will turn and attack enemy units if they become aware of any nearby.

			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));

	},
	page2:function(){
			let content = <div>
				<img src='img/page2.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
				 <br/>Wizard<b></b><br/>
	The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and cast concentrated blasts off destruction on anything, land or sky
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	
		
	},
	page3:function(){
		let content = <div>

			<img src='img/page3.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
		<br/><b>Valkyrie</b>
	A master of the two-handed axe, this glorious warrior runs between nearby buildings and can shred several troops or buildings at once with her whirlwind blow	
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
		
	},
	page4:function(){
		let content = <div>
				
				<img src='img/page4.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Barbarian</b><br/>
			This fearless warrior relies on his bulging muscles and striking mustache to wreak havoc in enemy villages. Release a horde of Barbarians and enjoy the mayhem
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	page5:function(){
		let content = <div>
				
				<img src='img/page5.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Archer</b><br/>
			These sharpshooters like to keep their distance on the battlefield and in life. Nothing makes them happier than single-mindedly taking down their target.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	

	page6:function(){
		let content = <div>
				
				<img src='img/page6.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Goblin</b><br/>
			These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap, and their hunger for resources is limitless
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page7:function(){
		let content = <div>
				
				<img src='img/page7.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Bowler</b><br/>
			The Bowler is a deadly troop that throws a large boulder that bounces once dealing splash damage on the initial bounce and dealing splash damage when it lands.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	page8:function(){
		let content = <div>
				
				<img src='img/download.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Lava Hound</b><br/>
			These fiery beasts can't resist chasing after Air Defenses, providing excellent protection for other troops. Once destroyed, they erupt into many smaller, weaker menaces.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page9:function(){
		let content = <div>
				
				<img src='img/ry1.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Miner</b><br/>
			These sneaky shovelers burrow underground, pass beneath walls and pop up right next to their targets. While underground, Miners cannot be damaged and will not trigger traps, but still gain bonuses from Spells.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	page10:function(){
		let content = <div>
				
				<img src='img/ry2.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Witch</b><br/>
			
	         The Witch never fights alone, constantly raising dead warriors. Upgraded Witches raise more skeletons at a time.
 
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page11:function(){
		let content = <div>
				
				<img src='img/ry3.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Golem</b><br/>
			The mighty Golem loves to soak up damage! When destroyed, it explodes and splits in two. The resulting Golemites have one-fifth the Golem's strength and hitpoints.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page12:function(){
		let content = <div>
				
				<img src='img/ry4.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Baby Dragon</b><br/>
			Dragon is a flying mini tank that spits fireballs at its target. The fireballs have slight area damage.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page13:function(){
		let content = <div>
				
				<img src='img/ry5.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Baloon</b><br/>
			The Balloon in earlier stages is only used for clearing out villas once other troops take out the air defenses but once you reach Town Hall 9 and the Balloon is upgraded, it becomes one of the most powerful units and also becomes more useful than compared to earlier.
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},


	page14:function(){
		let content = <div>
				
				<img src='img/ry6.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>Barbarian king</b><br/>
			This colossal menace soaks up huge amounts of damage and bashes anything in his path. He guards his territory fiercely when defending, and can launch into a devastating rage when attacking once his Iron Fist ability is unlocked!
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},



	page15:function(){
		let content = <div>
				
				<img src='img/ry7.jpg' width='100%' /><a href='#' className='btn-back' onClick={process.menu}><b>Back</b></a>
			<br/><b>archer Queen</b><br/>
			This graceful huntress is a master of destructive force, though modest in health. She snipes targets in her territory when defending, and can summon stealth and terrifying damage when attacking once her Royal Cloak ability is unlocked!
			
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},

	loading:function(){
		let content = <div>
					

					<div align='center'>
						<img src='img/ry8.jpg' width='100%'/>
					</div>
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
		
	},
	
}
process.loading();
setTimeout(function(){
	process.menu();
},1000);