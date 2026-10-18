import { App, HtmlItem, Model } from '../app'

import pathToFullModel from './1-Full Model Shear Tab.glb'
import pathToShearYieldModel from './2-Shear Yield (plate).glb'
import pathToShearRuptureModel from './3-Shear Rupture (plate).glb'
import pathToBlockShearModel from './4-Block Shear.glb'
import pathToBearingTearoutPlateModel from './5-Bearing and Tearout at Plate.glb'
import pathToBearingTearoutWebModel from './6-Bearing and Tearout at the Web.glb'
import pathToWeldRuptureModel from './7-Weld Rupture.glb'

const app = new App({
    title: 'Shear Tab',
    groups: [
        {
            name: 'models',
            items: [
                new Model({ name: '3D model', path: pathToFullModel }),
                new Model({ name: 'Shear yield', path: pathToShearYieldModel }),
                new Model({ name: 'Shear rupture', path: pathToShearRuptureModel }),
                new Model({ name: 'Block shear', path: pathToBlockShearModel }),
                new Model({ name: 'Bearing & tearout (plate)', path: pathToBearingTearoutPlateModel }),
                new Model({ name: 'Bearing & tearout (web)', path: pathToBearingTearoutWebModel }),
                new Model({ name: 'Weld rupture', path: pathToWeldRuptureModel }),
            ]
        },
        // {
        //     name: 'more',
        //     items: [
        //         new HtmlItem({ name: '2D drawing', content: drawing, classes: ['full-width'] }),
        //         new HtmlItem({ name: 'Calculations', content: calculations }),
        //         new HtmlItem({ name: 'More fun!', content: moreFun })
        //     ]
        // }
    ],
    contributors: [
        'Taylor ZZZ',
        'Peter Talley',
    ],
})

Model.viewer.edgeThresholdAngle = 30
