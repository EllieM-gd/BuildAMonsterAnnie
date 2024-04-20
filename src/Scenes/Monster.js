class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
        //this.add.image(x, y, 'mainmenu', 'background');
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redA.png");
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY+45, "monsterParts", "mouthE.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+45, "monsterParts", "mouthF.png");
        my.sprite.fangs.setVisible(false);
        my.sprite.nose = this.add.sprite(this.bodyX,this.bodyY+10, "monsterParts", "nose_green.png");
        my.sprite.nose.setScale(.7);
        my.sprite.rightEye = this.add.sprite(this.bodyX+25, this.bodyY-25, "monsterParts", "eye_psycho_dark.png");
        my.sprite.leftEye = this.add.sprite(this.bodyX-25, this.bodyY-25, "monsterParts", "eye_psycho_light.png");
        let eyescale = .8;
        my.sprite.leftEye.setScale(eyescale);
        my.sprite.rightEye.setScale(eyescale);
        my.sprite.antler = this.add.sprite(this.bodyX,this.bodyY-100, "monsterParts", "detail_yellow_antenna_large.png");

        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        my.sprite.rightArm = this.add.sprite(this.bodyX+100, this.bodyY+25, "monsterParts", "arm_greenA.png" );
        my.sprite.leftArm = this.add.sprite(this.bodyX-100, this.bodyY+25, "monsterParts", "arm_greenA.png" );
        my.sprite.leftArm.flipX = true;
        my.sprite.leftLeg = this.add.sprite(this.bodyX-50, this.bodyY+135, "monsterParts", "leg_blueC.png" );
        my.sprite.rightLeg = this.add.sprite(this.bodyX+50, this.bodyY+135, "monsterParts", "leg_blueC.png" );

        my.sprite.leftLeg.flipX = true;

        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        //Move Right
        this.input.keyboard.on("keydown", (e) =>  {
            if(e.key == 'd'){
                if (this.bodyX < 800) {
                    this.bodyX = this.bodyX + 25;
                    my.sprite.body.setX(this.bodyX);
                    my.sprite.rightArm.setX((this.bodyX+100));
                    my.sprite.leftArm.setX((this.bodyX-100));
                    my.sprite.rightLeg.setX((this.bodyX+50));
                    my.sprite.leftLeg.setX((this.bodyX-50));
                    my.sprite.smile.setX(this.bodyX);
                    my.sprite.fangs.setX(this.bodyX);
                    my.sprite.nose.setX(this.bodyX);
                    my.sprite.antler.setX(this.bodyX);
                    my.sprite.rightEye.setX(this.bodyX+25);
                    my.sprite.leftEye.setX(this.bodyX-25);

                }
            }

        })
        //Move Left
        this.input.keyboard.on("keydown", (e) =>  {
            if(e.key == 'a'){
                if (this.bodyX > 0){
                    this.bodyX = this.bodyX - 25;
                    my.sprite.body.setX(this.bodyX);
                    my.sprite.rightArm.setX((this.bodyX+100));
                    my.sprite.leftArm.setX((this.bodyX-100));
                    my.sprite.rightLeg.setX((this.bodyX+50));
                    my.sprite.antler.setX(this.bodyX);
                    my.sprite.leftLeg.setX((this.bodyX-50));
                    my.sprite.nose.setX(this.bodyX);
                    my.sprite.smile.setX(this.bodyX);
                    my.sprite.fangs.setX(this.bodyX);
                    my.sprite.rightEye.setX(this.bodyX+25);
                    my.sprite.leftEye.setX(this.bodyX-25);
                }
            }

        })
        //SmileMode
        this.input.keyboard.on("keydown", (e) =>  {
            if(e.key == 's'){
                my.sprite.smile.setVisible(true);
                my.sprite.fangs.setVisible(false);
            }

        })
        //FangMode
        this.input.keyboard.on("keydown", (e) =>  {
            if(e.key == 'f'){
                my.sprite.smile.setVisible(false);
                my.sprite.fangs.setVisible(true);
            }

        })
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability       

    }

}