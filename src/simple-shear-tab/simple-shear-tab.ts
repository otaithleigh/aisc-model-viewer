import { App, HtmlItem, Link, Model } from '../app'

import pathToFullModel from './01-Full Model/01a-Full Model Shear Tab.glb'
import pathToShearYieldModel from './02-Shear (Plate)/02a-Shear Yield (plate).glb'
import pathToShearRuptureModel from './02-Shear (Plate)/02b-Shear Rupture (plate).glb'
import pathToBlockShearModel from './03-Block Shear (Plate)/03a-Block Shear.glb'
import pathToBearingPlateModel from './04-Shear Transfer at Bolt Holes/04b-Bearing at Plate.glb'
import pathToTearoutModel from './04-Shear Transfer at Bolt Holes/04c-Bearing and Tearout at plate.glb'
import pathToBearingWebModel from './04-Shear Transfer at Bolt Holes/04d-Bearing at the Web.glb'
import pathToWeldRuptureModel from './05-Weld Rupture/05a-Weld Rupture.glb'

import drawingFull from './01-Full Model/01b-drawing.md'
import commentaryFull from './01-Full Model/01c-commentary.md'
import samplePhotos from './01-Full Model/01d-sample-photos.md'
import graphicsShear from './02-Shear (Plate)/02c-2d-graphics.md'
import graphicsBlockShear from './03-Block Shear (Plate)/03b-2d-graphics.md'
import commentaryShearTransfer from './04-Shear Transfer at Bolt Holes/04e-commentary.md'
import extraStuff from './06-More fun/06b-extra-stuff.md'

const app = new App({
    title: 'Shear Tab',
    groups: [
        {
            name: 'shear tab',
            items: [
                new Model({ name: '3D model', path: pathToFullModel, rotation: 180 }),
                new HtmlItem({ name: '2D structural drawing', content: drawingFull, classes: ['full-width'] }),
                new HtmlItem({ name: 'Commentary', content: commentaryFull }),
                new HtmlItem({ name: 'Sample photos', content: samplePhotos }),
            ]
        },
        {
            name: 'shear (plate)',
            items: [
                new Model({ name: 'Shear yield (plate)', path: pathToShearYieldModel, rotation: 180 }),
                new Model({ name: 'Shear rupture (plate)', path: pathToShearRuptureModel, rotation: 180 }),
                new HtmlItem({ name: '2D graphics', content: graphicsShear, linkname: '2D graphics (shear)' }),
            ]
        },
        {
            name: 'block shear (plate)',
            items: [
                new Model({ name: 'Block shear', path: pathToBlockShearModel, rotation: 180 }),
                new HtmlItem({ name: '2D graphics', content: graphicsBlockShear, linkname: '2D graphics (block shear)' }),
            ]
        },
        {
            name: 'shear transfer at bolt holes',
            items: [
                new HtmlItem({ name: 'Bolt shear', content: '<span style="color: red">(coming soon)</span>' }),
                new Model({ name: 'Bearing (plate)', path: pathToBearingPlateModel, rotation: 170 }),
                new Model({ name: 'Bearing & tearout (plate)', path: pathToTearoutModel, rotation: 170 }),
                new Model({ name: 'Bearing (web)', path: pathToBearingWebModel, rotation: 280 }),
                new HtmlItem({ name: 'Commentary', content: commentaryShearTransfer, linkname: 'Commentary (shear transfer)' }),
            ]
        },
        {
            name: 'weld rupture',
            items: [
                new Model({ name: 'Weld rupture', path: pathToWeldRuptureModel, rotation: 180 }),
            ]
        },
        {
            name: 'more fun',
            items: [
                new HtmlItem({ name: 'See it on the steel sculpture', content: '<span style="color: red">(coming later)</span>' }),
                new HtmlItem({ name: 'Extra stuff', content: extraStuff }),
            ]
        }
    ],
    contributors: [
        'Taylor ZZZ',
        'Kristi Sattler',
        'Peter Talley',
    ],
})

Model.viewer.edgeThresholdAngle = 30
