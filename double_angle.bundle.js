(()=>{"use strict";var e,t={8977:(e,t,a)=>{var n=a(1489);const i=a.p+"assets/Neyland Connection (centered)-efbabafeec87dc81dea7.glb",s=a.p+"assets/Neyland Connection - NET SECTION-18772c36585ee72ebbf5.glb",r=a.p+"assets/Neyland Connection - BLOCK SHEAR 2-a9d33900bf41fcfa388f.glb",p=`<h1 id="calculations">Calculations</h1> <p>This page demonstrates calculations to:</p> <ul> <li>determine the design strength of the double-angle tension member and bolted connection</li> <li>assess the compliance of the connection with geometric limitations</li> </ul> <p>The calculations are based on the 2016 AISC <em>Specification</em> and the 15th Edition AISC <em>Manual</em>. <span class="math inline">\\(\\newcommand{\\inch}{~{\\rm{in.}}} \\newcommand{\\kips}{~{\\rm{kips}}} \\newcommand{\\ksi}{~{\\rm{ksi}}} \\newcommand{\\sixt}{{\\tfrac{1}{16}\\inch}}\\)</span></p> <h2 id="material-and-geometric-properties">Material and Geometric Properties</h2> <p>The geometry of the connection is shown below.</p> <figure> <img src="${new URL(a(2853),a.b)}" alt=""/><figcaption>2D structural drawing of the connection.</figcaption> </figure> <p>The double-angle tension member and the gusset plate both conform to A36. This information is typically found in the general notes of the structural drawings.</p> <p>From AISC <em>Manual</em> Table 2-4, the material properties are as follows:</p> <div class="properties"> <table> <tbody> <tr class="odd"> <td>ASTM A36</td> </tr> <tr class="even"> <td><span class="math inline">\\(F_y = 36~\\rm{ksi}\\)</span></td> </tr> <tr class="odd"> <td><span class="math inline">\\(F_u = 58~\\rm{ksi}\\)</span></td> </tr> </tbody> </table> </div> <p>From AISC <em>Manual</em> Table 1-7, the geometric properties are as follows:</p> <div class="properties"> <table> <tbody> <tr class="odd"> <td>L6x6x5/8</td> </tr> <tr class="even"> <td><span class="math inline">\\(A_g = 7.13~\\rm{in.}^2\\)</span></td> </tr> <tr class="odd"> <td><span class="math inline">\\(\\bar{x} = 1.72~\\rm{in.}\\)</span></td> </tr> </tbody> </table> </div> <h2 id="tensile-yielding">Tensile Yielding</h2> <p>Calculate the nominal strength using AISC <em>Specification</em> Equation D2-1.</p> <p><span class="math display">\\[ \\begin{align} P_n &amp;= F_y A_g \\\\ &amp;= (36~\\rm{ksi})(2 \\times 7.13~\\rm{in.}^2) \\\\ &amp;= 513~\\rm{kips} \\end{align} \\]</span></p> <p>Calculate the design strength by applying the resistance factor.</p> <p><span class="math display">\\[ \\phi P_n = 0.9(513~\\rm{kips}) = 462~\\rm{kips}\\]</span></p> <h2 id="tensile-rupture">Tensile Rupture</h2> <p>A depiction of tensile rupture failure for this connection is shown in <a href="#Tensile-rupture">this three-dimensional view</a>.</p> <figure> <img src="${new URL(a(3061),a.b)}" alt=""/><figcaption>Tensile rupture path.</figcaption> </figure> <figure> <img src="${new URL(a(7507),a.b)}" alt=""/><figcaption>Corresponding failure surface.</figcaption> </figure> <p>The net area, <span class="math inline">\\(A_n\\)</span>, is shown in red. It is equal to the gross area minus the material removed for two bolt holes as defined in Section B4.3b of the AISC <em>Specification</em>:</p> <p><span class="math display">\\[ \\begin{align} A_n &amp;= A_g - 2(d_h + \\tfrac{1}{16}~\\rm{in.})t \\\\ &amp;= (2 \\times 7.13~\\rm{in.}^2) - 2(\\tfrac{15}{16}~\\rm{in.} + \\tfrac{1}{16}~\\rm{in.})(\\tfrac{5}{8}~\\rm{in.}) \\\\ &amp;= 13.01~\\rm{in.}^2 \\end{align} \\]</span></p> <p>From the description of the element in AISC <em>Specification</em> Table D3.1 Case 8, calculate the shear lag factor, U, as the larger of the values from Case 2 and Case 8.</p> <p>Case 2, where <span class="math inline">\\(l\\)</span> is the length of connection from the centerline of the first bolt to centerline of the last bolt.</p> <p><span class="math display">\\[ \\begin{align} U &amp;= 1 - \\frac{\\bar{x}}{l} \\\\ &amp;= 1 - \\frac{1.72~\\rm{in.}}{24~\\rm{in.}} \\\\ &amp;= 0.928 \\end{align} \\]</span></p> <p>Case 8.</p> <p><span class="math display">\\[ U = 0.8 \\]</span></p> <p>Therefore, use the larger <span class="math inline">\\(U = 0.928\\)</span>.</p> <p>Calculate the effective net area using AISC <em>Specification</em> Equation D3-1.</p> <p><span class="math display">\\[ \\begin{align} A_e &amp;= A_n U \\\\ &amp;= (13.01~\\rm{in.}^2)(0.928) \\\\ &amp;= 12.07~\\rm{in.}^2 \\end{align} \\]</span></p> <p>Calculate the nominal strength using AISC <em>Specification</em> Equation D2-2.</p> <p><span class="math display">\\[ \\begin{align} P_n &amp;= F_u A_e \\\\ &amp;= (58~\\rm{ksi})(12.07~\\rm{in.}^2) \\\\ &amp;= 700~\\rm{kips} \\end{align} \\]</span></p> <p>Calculate the design strength by applying the resistance factor.</p> <p><span class="math display">\\[ \\phi P_n = 0.75(700~\\rm{kips}) = 525~\\rm{kips}\\]</span></p> <h2 id="block-shear-rupture">Block Shear Rupture</h2> <p>The only valid and plausible block shear rupture failure path is shown below. See also the <a href="#Block-shear-rupture">3D view of this failure mode</a>.</p> <figure> <img src="${new URL(a(6609),a.b)}" alt=""/><figcaption>Block shear failure path (side view). <span class="math inline">\\(A_{nv}\\)</span> in blue, <span class="math inline">\\(A_{nt}\\)</span> in red.</figcaption> </figure> <figure> <img src="${new URL(a(963),a.b)}" alt=""/><figcaption>Area subject to shear in blue. Light areas are removed for net area.</figcaption> </figure> <figure> <img src="${new URL(a(2934),a.b)}" alt=""/><figcaption>Area subject to tension in red. Light areas are removed for net area.</figcaption> </figure> <p>Calculate the gross area subject to shear.</p> <p><span class="math display">\\[ \\begin{align} A_{gv} &amp;= 2 \\times (26\\tfrac{1}{8}~\\rm{in.})(\\tfrac{5}{8}~\\rm{in.}) \\\\ &amp;= 32.66~\\rm{in.}^2 \\end{align} \\]</span></p> <p>Calculate the net area subject to shear as gross area subject to shear minus the material removed for eight and a half bolt holes on each angle.</p> <p><span class="math display">\\[ \\begin{align} A_{nv} &amp;= A_{gv} - 2 \\times 8\\tfrac{1}{2} \\times (d_h + \\tfrac{1}{16}~\\rm{in.})t \\\\ &amp;= 32.66~\\rm{in.}^2 - 2 \\times 8\\tfrac{1}{2} \\times (\\tfrac{15}{16}~\\rm{in.} + \\tfrac{1}{16}~\\rm{in.})(\\tfrac{5}{8}~\\rm{in.}) \\\\ &amp;= 22.04~\\rm{in.}^2 \\end{align} \\]</span></p> <p>Calculate the gross area subject to tension.</p> <p><span class="math display">\\[ \\begin{align} A_{gt} &amp;= 2 \\times (3\\tfrac{3}{4}~\\rm{in.})(\\tfrac{5}{8}~\\rm{in.}) \\\\ &amp;= 4.69~\\rm{in.}^2 \\end{align} \\]</span></p> <p>Calculate the net area subject to tension as gross area subject to tension minus the material removed for one half bolt hole on each angle.</p> <p><span class="math display">\\[ \\begin{align} A_{nt} &amp;= A_{gt} - 2 \\times \\tfrac{1}{2} \\times (d_h + \\tfrac{1}{16}~\\rm{in.})t \\\\ &amp;= 4.69~\\rm{in.}^2 - 2 \\times \\tfrac{1}{2} \\times (\\tfrac{15}{16}~\\rm{in.} + \\tfrac{1}{16}~\\rm{in.})(\\tfrac{5}{8}~\\rm{in.}) \\\\ &amp;= 4.07~\\rm{in.}^2 \\end{align} \\]</span></p> <p>Calculate the nominal strength using AISC <em>Specification</em> Equation J4-5. Take <span class="math inline">\\(U_{bs} = 1.0\\)</span></p> <p><span class="math display">\\[ \\begin{align} P_n &amp;= 0.6 F_u A_{nv} + U_{bs} F_u A_{nt} \\leq 0.6 F_y A_{gv} + U_{bs} F_u A_{nt} \\\\ &amp;= 0.6 (58~\\rm{ksi}) (22.04~\\rm{in.}^2) + (1.0)(58~\\rm{ksi}) (4.07~\\rm{in.}^2)\\\\ &amp;\\;\\;\\;\\leq 0.6 (36~\\rm{ksi}) (32.66~\\rm{in.}^2) + (1.0)(58~\\rm{ksi}) (4.07~\\rm{in.}^2)\\\\ &amp;= 1003~\\rm{kips} \\leq 942~\\rm{kips} \\\\ &amp;= 942~\\rm{kips} \\end{align} \\]</span></p> <p>Calculate the design strength by applying the resistance factor.</p> <p><span class="math display">\\[ \\phi P_n = 0.75(942~\\rm{kips}) = 706~\\rm{kips}\\]</span></p> <h2 id="bolt-group-strength">Bolt Group Strength</h2> <p>The limit states of bolt shear rupture, bearing, and tearout are evaluated together to determine the design strength of the bolt group.</p> <p>For each bolt, an effective strength is calculated as the lowest strength from the limit states of bolt shear rupture, bearing, and tearout.</p> <figure> <img src="${new URL(a(2367),a.b)}" alt=""/><figcaption>Bolt numbering scheme used.</figcaption> </figure> <p>From AISC <em>Specification</em> Table J3.2, Group A bolts, when threads are not excluded from shear planes:</p> <p><span class="math inline">\\(F_{nv} = 54~\\rm{ksi}\\)</span></p> <p>Calculate the nominal unthreaded body area of of bolt.</p> <p><span class="math display">\\[ \\begin{align} A_b &amp;= \\tfrac{\\pi}{4} d^2 \\\\ &amp;= \\tfrac{\\pi}{4}(\\tfrac{7}{8}~\\rm{in.})^2 \\\\ &amp;= 0.601~\\rm{in.}^2 \\end{align} \\]</span></p> <h3 id="bolt-1">Bolt #1</h3> <p>Calculate the nominal strength for the limit state of bolt shear rupture using AISC <em>Specification</em> Equation J3-1. Note that the bolts are in double shear.</p> <p><span class="math display">\\[ \\begin{align} r_n &amp;= F_{nv} A_b \\\\ &amp;= (54~\\rm{ksi})(2 \\times 0.601~\\rm{in.}^2) \\\\ &amp;= 64.9~\\rm{kips} \\end{align} \\]</span></p> <p>Calculate the nominal strength for the limit state of bearing in the double angle using AISC <em>Specification</em> Equation J3-6a.</p> <p><span class="math display">\\[ \\begin{align} r_n &amp;= 2.4dtF_u \\\\ &amp;= 2.4(\\tfrac{7}{8}~\\rm{in.})(2 \\times \\tfrac{5}{8}~\\rm{in.})(58~\\rm{ksi}) \\\\ &amp;= 152.3~\\rm{kips} \\end{align} \\]</span></p> <p>Calculate the nominal strength for the limit state of bearing in the gusset plate using AISC <em>Specification</em> Equation J3-6a.</p> <p><span class="math display">\\[ \\begin{align} r_n &amp;= 2.4dtF_u \\\\ &amp;= 2.4(\\tfrac{7}{8}~\\rm{in.})(\\tfrac{1}{2}~\\rm{in.})(58~\\rm{ksi}) \\\\ &amp;= 60.9~\\rm{kips} \\end{align} \\]</span></p> <p>Calculate the nominal strength for the limit state of tearout in the double angle using AISC <em>Specification</em> Equation J3-6c.</p> <p><span class="math display">\\[ \\begin{align} l_c &amp;= 2\\tfrac{1}{8}~\\rm{in.} - \\tfrac{1}{2}d_h \\\\ &amp;= 2\\tfrac{1}{8}~\\rm{in.} - \\tfrac{1}{2}(\\tfrac{15}{16}~\\rm{in.}) \\\\ &amp;= 1.656~\\rm{in.} \\end{align} \\]</span></p> <p><span class="math display">\\[ \\begin{align} r_n &amp;= 1.2l_ctF_u \\\\ &amp;= 1.2(1.656~\\rm{in.})(2 \\times \\tfrac{5}{8}~\\rm{in.})(58~\\rm{ksi}) \\\\ &amp;= 144.1~\\rm{kips} \\end{align} \\]</span></p> <p>Calculate the nominal strength for the limit state of tearout in the gusset plate using AISC <em>Specification</em> Equation J3-6c.</p> <p><span class="math display">\\[ \\begin{align} l_c &amp;= 3~\\rm{in.} - d_h \\\\ &amp;= 3~\\rm{in.} - \\tfrac{15}{16}~\\rm{in.} \\\\ &amp;= 2.063~\\rm{in.} \\end{align} \\]</span></p> <p><span class="math display">\\[ \\begin{align} r_n &amp;= 1.2l_ctF_u \\\\ &amp;= 1.2(2.063~\\rm{in.})(\\tfrac{1}{2}~\\rm{in.})(58~\\rm{ksi}) \\\\ &amp;= 71.2~\\rm{kips} \\end{align} \\]</span></p> <p>Bearing in the gusset plate controls. The nominal effective strength of bolt #1 is 60.9 kips.</p> <h3 id="bolts-2-8">Bolts #2-8</h3> <p>The effective strength of bolts #2 through #8 is calculated in the same manner, except the clear distance for tearout is the same for both the plate and the double angle:</p> <p><span class="math display">\\[ \\begin{align} l_c &amp;= 3\\inch - d_h = 2.063\\inch \\end{align} \\]</span></p> <p>Bearing in the gusset plate controls. The nominal effective strength of bolts #2 through #8 is 60.9 kips.</p> <h3 id="bolt-9">Bolt #9</h3> <p>The effective strength of bolt #9 is calculated in the same manner, except with different clear distances:</p> <p><span class="math display">\\[ \\begin{align} l_{c,\\text{ angle}} &amp;= 3\\inch - d_h = 2.063\\inch \\\\ l_{c,\\text{ plate}} &amp;= 0.882\\inch \\text{ (see figure)} \\end{align} \\]</span></p> <figure> <img src="${new URL(a(2825),a.b)}" alt=""/><figcaption>Clear distance for gusset-plate tearout for bolt #9.</figcaption> </figure> <p>Tearout in the gusset plate controls. The nominal effective strength of bolt #9 is 30.7 kips.</p> <h3 id="bolt-group">Bolt Group</h3> <p>Calculate the nominal effective strength of the bolt group by summing the nominal effective strength of each bolt.</p> <p><span class="math display">\\[ \\begin{align} R_n &amp;= 60.9~\\rm{kips} + 7 \\times 60.9~\\rm{kips} + 30.7~\\rm{kips} \\\\ &amp;= 518~\\rm{kips} \\end{align} \\]</span></p> <p>Calculate the design strength by applying the resistance factor.</p> <p><span class="math display">\\[ \\phi P_n = 0.75(518~\\rm{kips}) = 388~\\rm{kips}\\]</span></p> <h2 id="design-strength">Design Strength</h2> <p>The design strength of the double-angle tension member and bolted connection for each of the limit states investigated is summarized in the following table.</p> <table> <thead> <tr class="header"> <th style="text-align:left">Limit state</th> <th style="text-align:left">Design strength</th> </tr> </thead> <tbody> <tr class="odd"> <td style="text-align:left">Tensile yielding</td> <td style="text-align:left">462 kips</td> </tr> <tr class="even"> <td style="text-align:left">Tensile rupture</td> <td style="text-align:left">525 kips</td> </tr> <tr class="odd"> <td style="text-align:left">Block shear rupture</td> <td style="text-align:left">706 kips</td> </tr> <tr class="even"> <td style="text-align:left">Bolt shear rupture, bearing, and tearout</td> <td style="text-align:left">388 kips</td> </tr> </tbody> </table> <p><strong>Bolt group strength controls with a design strength of 388 kips.</strong></p> <h2 id="bolt-spacing">Bolt Spacing</h2> <p>From Section J3.3 of the AISC <em>Specification</em>, the minimum spacing between bolts is <span class="math inline">\\(2\\tfrac{2}{3}d\\)</span>.</p> <p><span class="math display">\\[ \\begin{align} s_{min} &amp;= 2\\tfrac{2}{3}d \\\\ &amp;= 2\\tfrac{2}{3}(\\tfrac{7}{8}~\\rm{in.}) \\\\ &amp;= 2.33~\\rm{in.} \\end{align} \\]</span></p> <p>From the User Note in Section J3.3 of the AISC <em>Specification</em>, the preferred minimum spacing between bolts is <span class="math inline">\\(3d\\)</span>.</p> <p><span class="math display">\\[ \\begin{align} s_{min} &amp;= 3d \\\\ &amp;= 3(\\tfrac{7}{8}~\\rm{in.}) \\\\ &amp;= 2.63~\\rm{in.} \\end{align} \\]</span></p> <p>From Section J3.5 of the AISC <em>Specification</em> and noting that the members are painted, the maximum spacing between bolts is the lesser of 24 times the thickness of the thinner part jointed and 12 in.</p> <p><span class="math display">\\[ \\begin{align} s_{max} &amp;= min(24t_{min},12~\\rm{in.}) \\\\ &amp;= min(24(\\tfrac{5}{8}~\\rm{in.}),12~\\rm{in.}) \\\\ &amp;= 12~\\rm{in.} \\end{align} \\]</span></p> <p>The provided spacing between bolts is 3 in. which satisfies the required minimum spacing, preferred minimum spacing, and the maximum spacing.</p> <h2 id="bolt-edge-distances">Bolt Edge Distances</h2> <p>From Section J3.4 and Table J3.4 of the AISC <em>Specification</em>, the minimum edge distance for a 7/8 in. diameter bolt in a standard hole is <span class="math inline">\\(1\\tfrac{1}{8}~\\rm{in.}\\)</span></p> <p>The minimum provided edge distance is <span class="math inline">\\(2\\tfrac{1}{8}~\\rm{in.}\\)</span> which satisfies the minimum edge distance requirement.</p> <p>From Section J3.5 of the AISC <em>Specification</em>, the maximum spacing between bolts is the lesser of 12 times the thickness of the connected part and 6 in.</p> <p><span class="math display">\\[ \\begin{align} L_{e,\\max} &amp;= \\min(12t_{\\min},6~\\rm{in.}) \\\\ &amp;= \\min(12(\\tfrac{1}{2}~\\rm{in.}),6~\\rm{in.}) \\\\ &amp;= 6~\\rm{in.} \\end{align} \\]</span></p> <p>The maximum provided edge distance is <span class="math inline">\\(3\\tfrac{3}{4}~\\rm{in.}\\)</span> which satisfies the maximum edge distance requirement.</p> <h2 id="entering-and-tightening-clearances">Entering and Tightening Clearances</h2> <p>From Table 7-15 of the AISC <em>Manual</em>, the minimum distance from the center of a 7/8 in. diameter A325 bolt and the face of a vertical obstruction is</p> <p><span class="math display">\\[1\\tfrac{1}{4}~\\rm{in.}\\]</span></p> <p>The distance between the center of the bolts and the face of the outstanding leg of the angles is</p> <p><span class="math display">\\[2\\tfrac{1}{4}~\\rm{in.} - t = 2\\tfrac{1}{4}~\\rm{in.} - \\tfrac{5}{8}~\\rm{in.} = 1\\tfrac{5}{8}~\\rm{in.}\\]</span></p> <p>The provided clearance exceeds the minimum required clearance, therefore the outstanding leg of the angle will not interfere with the installation of the bolts.</p> `,l=`<figure> <img src="${new URL(a(2853),a.b)}"/> </figure> `,o=`<p>This connection can be found in the real world in Neyland Stadium. Check it out at <a href="https://www.google.com/maps/place/35%C2%B057&#39;19.8%22N+83%C2%B055&#39;26.9%22W">35°57'19.8"N 83°55'26.9"W</a>. Go Vols!</p> <hr/> <p>What would be the controlling limit state if the bolts were A490?</p> <hr/> <p>What would be the effective net area of the tension member if the angles were 2L8x4x5/8 LLBB (long legs back-to-back)? What if they were short legs back-to-back?</p> <hr/> <p>The column is a W24x130. You won’t find this section in the 15th Edition of the Steel Construction Manual since it is no longer commonly produced. It last appeared in the <a href="https://www.aisc.org/globalassets/aisc/publications/historic-steel-construction-manuals/r07-04_5859.pdf">7th Edition (PDF)</a>. If you are looking for information on historical shapes, AISC’s <a href="https://www.aisc.org/products/publication/design-guide/Design-Guide-15-Rehabilitation-and-Retrofit-Second-Edition/">Design Guide 15</a> is a good place to start. PDF versions of all the Design Guides are free for AISC members – including student members!</p> <hr/> <p>The <em>work point</em> of a connection is where the center line of the connected members meet. It is common for this to be at the top surface of the base plate. The work point of this connection is shown below, with the member centerlines in red:</p> <figure> <img src="${new URL(a(6503),a.b)}" alt=""/><figcaption>Work point shown by intersection of member centerlines.</figcaption> </figure> <hr/> <p>Do you have a fun idea to add to this page? Learn how to contribute it in <a href="../docs/#Adding-a-more-fun-item">the documentation</a>.</p> `,m=`<figure> <img src="${new URL(a(919),a.b)}" alt=""/><figcaption>The actual connection at Neyland Stadium.</figcaption> </figure> `;new n.qw({title:"Double-angle Brace Connection",groups:[{name:"models",items:[new n.Kx({name:"3D model",path:i}),new n.Kx({name:"Tensile rupture",path:s}),new n.Kx({name:"Block shear rupture",path:r})]},{name:"more",items:[new n.Xs({name:"Calculations",content:p}),new n.Xs({name:"2D structural drawing",content:l,classes:["full-width"]}),new n.Xs({name:"Photo",content:m}),new n.Xs({name:"More fun!",content:o})]}],contributors:["Peter Talley","Nicolo Franceschetti","Mark Denavit"]})},919:(e,t,a)=>{e.exports=a.p+"assets/Photo-2facc5c0ecc4ad4064a9.jpg"},963:(e,t,a)=>{e.exports=a.p+"assets/block-shear-area-shear-6c6b66bb55b9f469c72e.svg"},2934:(e,t,a)=>{e.exports=a.p+"assets/block-shear-area-tension-228ad718271659cefd0f.svg"},6609:(e,t,a)=>{e.exports=a.p+"assets/block-shear-path-18a90728bf0de4d03267.svg"},2825:(e,t,a)=>{e.exports=a.p+"assets/bolt-9-clear-distance-f69150541fa60a0b09f1.svg"},2367:(e,t,a)=>{e.exports=a.p+"assets/bolt-numbering-d798970c4e27e7189b2a.svg"},2853:(e,t,a)=>{e.exports=a.p+"assets/double-angle-8d85e7c3ffdf71235e7a.svg"},7507:(e,t,a)=>{e.exports=a.p+"assets/rupture-area-c78f0fc6093044187c0b.svg"},3061:(e,t,a)=>{e.exports=a.p+"assets/rupture-path-1bb5652202900ac026e1.svg"},6503:(e,t,a)=>{e.exports=a.p+"assets/workpoint-338c6d9a89b87293e5cc.svg"}},a={};function n(e){var i=a[e];if(void 0!==i)return i.exports;var s=a[e]={exports:{}};return t[e](s,s.exports,n),s.exports}n.m=t,e=[],n.O=(t,a,i,s)=>{if(!a){var r=1/0;for(m=0;m<e.length;m++){for(var[a,i,s]=e[m],p=!0,l=0;l<a.length;l++)(!1&s||r>=s)&&Object.keys(n.O).every((e=>n.O[e](a[l])))?a.splice(l--,1):(p=!1,s<r&&(r=s));if(p){e.splice(m--,1);var o=i();void 0!==o&&(t=o)}}return t}s=s||0;for(var m=e.length;m>0&&e[m-1][2]>s;m--)e[m]=e[m-1];e[m]=[a,i,s]},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=a[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n.b=document.baseURI||self.location.href;var e={968:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var i,s,[r,p,l]=a,o=0;if(r.some((t=>0!==e[t]))){for(i in p)n.o(p,i)&&(n.m[i]=p[i]);if(l)var m=l(n)}for(t&&t(a);o<r.length;o++)s=r[o],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(m)},a=self.webpackChunkaisc_model_viewer=self.webpackChunkaisc_model_viewer||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var i=n.O(void 0,[445,489],(()=>n(8977)));i=n.O(i)})();
//# sourceMappingURL=double_angle.bundle.js.map