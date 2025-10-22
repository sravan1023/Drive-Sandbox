import * as THREE from 'three'

import Loader from './Utils/Loader.js'
import EventEmitter from './Utils/EventEmitter.js'

export default class Resources extends EventEmitter
{
    constructor()
    {
        super()

        this.loader = new Loader()
        this.items = {}

        this.loader.load([
            // Matcaps
            { name: 'matcapBeige', source: './models/matcaps/beige.png', type: 'texture' },
            { name: 'matcapBlack', source: './models/matcaps/black.png', type: 'texture' },
            { name: 'matcapOrange', source: './models/matcaps/orange.png', type: 'texture' },
            { name: 'matcapRed', source: './models/matcaps/red.png', type: 'texture' },
            { name: 'matcapWhite', source: './models/matcaps/white.png', type: 'texture' },
            { name: 'matcapGreen', source: './models/matcaps/green.png', type: 'texture' },
            { name: 'matcapBrown', source: './models/matcaps/brown.png', type: 'texture' },
            { name: 'matcapGray', source: './models/matcaps/gray.png', type: 'texture' },
            { name: 'matcapEmeraldGreen', source: './models/matcaps/emeraldGreen.png', type: 'texture' },
            { name: 'matcapPurple', source: './models/matcaps/purple.png', type: 'texture' },
            { name: 'matcapBlue', source: './models/matcaps/blue.png', type: 'texture' },
            { name: 'matcapYellow', source: './models/matcaps/yellow.png', type: 'texture' },
            { name: 'matcapMetal', source: './models/matcaps/metal.png', type: 'texture' },
            // { name: 'matcapGold', source: './models/matcaps/gold.png', type: 'texture' },

            // Intro
            { name: 'introStaticBase', source: './models/intro/static/base.glb' },
            { name: 'introStaticCollision', source: './models/intro/static/collision.glb' },
            { name: 'introStaticFloorShadow', source: './models/intro/static/floorShadow.png', type: 'texture' },

            { name: 'introInstructionsLabels', source: './models/intro/instructions/labels.glb' },
            { name: 'introInstructionsArrows', source: './models/intro/instructions/arrows.png', type: 'texture' },
            { name: 'introInstructionsControls', source: './models/intro/instructions/controls.png', type: 'texture' },
            { name: 'introInstructionsOther', source: './models/intro/instructions/other.png', type: 'texture' },

            { name: 'introArrowKeyBase', source: './models/intro/arrowKey/base.glb' },
            { name: 'introArrowKeyCollision', source: './models/intro/arrowKey/collision.glb' },

            // Car default
            { name: 'carDefaultChassis', source: './models/car/default/chassis.glb' },
            { name: 'carDefaultWheel', source: './models/car/default/wheel.glb' },
            { name: 'carDefaultBackLightsBrake', source: './models/car/default/backLightsBrake.glb' },
            { name: 'carDefaultBackLightsReverse', source: './models/car/default/backLightsReverse.glb' },
            { name: 'carDefaultAntena', source: './models/car/default/antena.glb' },
            { name: 'carDefaultBunnyEarLeft', source: './models/car/default/bunnyEarLeft.glb' },
            { name: 'carDefaultBunnyEarRight', source: './models/car/default/bunnyEarRight.glb' },

            // Car default
            { name: 'carCyberTruckChassis', source: './models/car/cyberTruck/chassis.glb' },
            { name: 'carCyberTruckWheel', source: './models/car/cyberTruck/wheel.glb' },
            { name: 'carCyberTruckBackLightsBrake', source: './models/car/cyberTruck/backLightsBrake.glb' },
            { name: 'carCyberTruckBackLightsReverse', source: './models/car/cyberTruck/backLightsReverse.glb' },
            { name: 'carCyberTruckAntena', source: './models/car/cyberTruck/antena.glb' },

            // Brick
            { name: 'playgroundStaticBase', source: './models/playground/static/base.glb' },
            { name: 'playgroundStaticCollision', source: './models/playground/static/collision.glb' },
            { name: 'playgroundStaticFloorShadow', source: './models/playground/static/floorShadow.png', type: 'texture' },

            // Brick
            { name: 'brickBase', source: './models/brick/base.glb' },
            { name: 'brickCollision', source: './models/brick/collision.glb' },

            // Horn
            { name: 'hornBase', source: './models/horn/base.glb' },
            { name: 'hornCollision', source: './models/horn/collision.glb' },

            // // Distinction A
            // { name: 'distinctionAStaticBase', source: './models/distinctionA/static/base.glb' },
            // { name: 'distinctionAStaticCollision', source: './models/distinctionA/static/collision.glb' },
            // { name: 'distinctionAStaticFloorShadow', source: './models/distinctionA/static/floorShadow.png', type: 'texture' },

            // // Distinction B
            // { name: 'distinctionBStaticBase', source: './models/distinctionB/static/base.glb' },
            // { name: 'distinctionBStaticCollision', source: './models/distinctionB/static/collision.glb' },
            // { name: 'distinctionBStaticFloorShadow', source: './models/distinctionB/static/floorShadow.png', type: 'texture' },

            // // Distinction C
            // { name: 'distinctionCStaticBase', source: './models/distinctionC/static/base.glb' },
            // { name: 'distinctionCStaticCollision', source: './models/distinctionC/static/collision.glb' },
            // { name: 'distinctionCStaticFloorShadow', source: './models/distinctionC/static/floorShadow.png', type: 'texture' },

            // Cone
            { name: 'coneBase', source: './models/cone/base.glb' },
            { name: 'coneCollision', source: './models/cone/collision.glb' },

            // Lemon
            { name: 'lemonBase', source: './models/lemon/base.glb' },
            { name: 'lemonCollision', source: './models/lemon/collision.glb' },

            // Bownling ball
            { name: 'bowlingBallBase', source: './models/bowlingBall/base.glb' },
            { name: 'bowlingBallCollision', source: './models/bowlingBall/collision.glb' },

            // Bownling ball
            { name: 'bowlingPinBase', source: './models/bowlingPin/base.glb' },
            { name: 'bowlingPinCollision', source: './models/bowlingPin/collision.glb' },

            // Areas
            { name: 'areaKeyEnter', source: './models/area/keyEnter.png', type: 'texture' },
            { name: 'areaEnter', source: './models/area/enter.png', type: 'texture' },
            { name: 'areaOpen', source: './models/area/open.png', type: 'texture' },
            { name: 'areaReset', source: './models/area/reset.png', type: 'texture' },
            { name: 'areaQuestionMark', source: './models/area/questionMark.png', type: 'texture' },

            // Tiles
            { name: 'tilesABase', source: './models/tiles/a/base.glb' },
            { name: 'tilesACollision', source: './models/tiles/a/collision.glb' },

            { name: 'tilesBBase', source: './models/tiles/b/base.glb' },
            { name: 'tilesBCollision', source: './models/tiles/b/collision.glb' },

            { name: 'tilesCBase', source: './models/tiles/c/base.glb' },
            { name: 'tilesCCollision', source: './models/tiles/c/collision.glb' },

            { name: 'tilesDBase', source: './models/tiles/d/base.glb' },
            { name: 'tilesDCollision', source: './models/tiles/d/collision.glb' },

            { name: 'tilesEBase', source: './models/tiles/e/base.glb' },
            { name: 'tilesECollision', source: './models/tiles/e/collision.glb' },

            // Konami
            { name: 'konamiLabel', source: './models/konami/label.png', type: 'texture' },
            { name: 'konamiLabelTouch', source: './models/konami/label-touch.png', type: 'texture' },

            // Wigs
            { name: 'wig1', source: './models/wigs/wig1.glb' },
            { name: 'wig2', source: './models/wigs/wig2.glb' },
            { name: 'wig3', source: './models/wigs/wig3.glb' },
            { name: 'wig4', source: './models/wigs/wig4.glb' },

            // // Egg
            // { name: 'eggBase', source: './models/egg/base.glb' },
            // { name: 'eggCollision', source: './models/egg/collision.glb' },
        ])

        this.loader.on('fileEnd', (_resource, _data) =>
        {
            this.items[_resource.name] = _data

            // Texture
            if(_resource.type === 'texture')
            {
                const texture = new THREE.Texture(_data)
                texture.needsUpdate = true

                this.items[`${_resource.name}Texture`] = texture
            }

            // Trigger progress
            this.trigger('progress', [this.loader.loaded / this.loader.toLoad])
        })

        this.loader.on('end', () =>
        {
            // Trigger ready
            this.trigger('ready')
        })
    }
}
