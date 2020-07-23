Calculations
============

This page demonstrates calculations to determine the tensile strength of the
welded connection, considering the limit states of:

- Tensile yielding of the HSS member
- Tensile rupture of the HSS member
- Fracture of the weld
- Base metal strength of the HSS member
- Base metal strength of the gusset plate

The calculations are based on the 2016 AISC *Specification* and the 15th edition
AISC *Manual*.


Material and geometric properties
---------------------------------

The connection consists of a HSS6x6x3/8 connected by four (4) 5/16" fillet welds
to a 3/4"-thick gusset plate.

![Structural drawing](../assets/placeholder.png)

Typically, the material specifications for each type of steel shape used on a project
are listed on the general notes sheet of the structural drawings. For this case,
the HSS member conforms to ASTM A1085.

From AISC *Manual* Table 2-4, the material properties for the HSS member are:

- ASTM A1085 Gr. A
- $F_y = 50~\rm{ksi}$
- $F_u = 65~\rm{ksi}$

Note that for the HSS member, the section properties used in this example are
not the ones listed in the AISC *Manual*. This is because A1085 HSS does not
have the same design wall thicknes reduction that the more common A500 does.
Instead, refer to the [A1085 Dimensions and Properties table (PDF)](https://www.aisc.org/globalassets/product-files-not-searched/manuals/a1085-dimension-and-properties_square_7-10-2018.pdf) available from AISC.

From AISC *Manual* Table 2-5, the material properties for the gusset plate are:

- ASTM A572 Gr. 50
- $F_y = 50~\rm{ksi}$
- $F_u = 65~\rm{ksi}$


Tensile yield
-------------

Calculate the nominal strength using AISC *Specification* Equation D2-1.

$$ \begin{align}
    P_n &= F_y A_g \\
        &= (50~\rm{ksi})(8.08~\rm{in.}^2) \\
        &= 404~\rm{kips}
\end{align} $$

$$ \phi P_n = 0.9 (404~\rm{kips}) \boxed{= 364~\rm{kips}} $$


Tensile rupture ([model](#Tensile-rupture))
---------------

Steps:

- Calculate net area $A_n$
- Calculate shear lag factor $U$ and effective net area $A_e$
- Calculate tensile rupture strength

A depiction of tensile rupture failure for this connection is shown in
[this three-dimensional view](#Tensile-rupture).

The net area, $A_n$, is shown in red. It is equal to the gross area minus the
material removed for the slot as defined in Section B4.3b of the AISC
*Specification*.

$$ \begin{align}
    A_n &= A_g - 2 \ell (\text{plate thickness} + \tfrac{1}{16}~\rm{in.}) \\
        &= 8.08~\rm{in.}^2 - 2 (12~\rm{in.}) (\tfrac{3}{4}~\rm{in.}
           + \tfrac{1}{16}~\rm{in.}) \\
        &= 7.78~\rm{in.}^2
\end{align} $$

From the description of the element in AISC *Specification* Table D3.1,
calculate the shear lag factor $U$. Since the length of the connection
$\ell~(12~\rm{in.})$ is greater than the width of the HSS $B~(6~\rm{in.})$, Case
6 applies. First calculate the connection eccentricity $\bar{x}$.

$$ \begin{align}
    \bar{x} &= \frac{B^2 + 2BH}{4(B + H)} \\[1ex]
            &= \frac{(6~\rm{in.})^2 + 2(6~\rm{in.})(6~\rm{in.})}
                    {4(6~\rm{in.} + 6~\rm{in.})} \\
            &= 2.25~\rm{in.}
\end{align} $$

Calculate the shear lag factor.

$$ \begin{align}
    U &= 1 - \frac{\bar{x}}{\ell} \\
      &= 1 - \frac{2.25~\rm{in.}}{12~\rm{in.}} \\
      &= 0.812
\end{align} $$

Calculate the effective net area using AISC *Specification* Equation D3-1:

$$ A_e = A_n U = (7.78~\rm{in.}^2) (0.812) = 6.32~\rm{in.}^2 $$

Calculate the nominal strength using AISC *Specification* Equation D2-2:

$$ \begin{align}
    P_n &= F_u A_e \\
        &= (65~\rm{ksi})(6.32~\rm{in.}^2) \\
        &= 411~\rm{kips}
\end{align} $$

Calculate the design strength by applying the resistance factor.

$$ \phi P_n = 0.75(411~\rm{kips}) \boxed{= 308~\rm{kips}} $$


Weld fracture strength ([model](#Weld-fracture))
----------------------

The connection is held together by four (4) 5/16" fillet welds. The filler metal
classification strength $F_{EXX}$ is 70 ksi.

The fracture strength of the weld is defined by *Specification* equation J2-3.

$$ R_n = F_{nw} A_{we} \tag{J2-3} $$

Where $F_{nw}$ is the nominal stress of the weld metal and $A_{we}$ is the
effective area of the weld. These values are defined by *Specification* Table
J2.5. For fillet welds, $F_{nw}$ is $0.60 F_{EXX}$ and $A_{we}$ is defined by
*Specification* section J2.2a:

> The effective area of a fillet weld shall be the effective length multiplied
> by the effective throat. The effective throat of a fillet weld shall be the
> shortest distance from the root to the face of the diagrammatic weld.

For the fillet welds in this connection, the effective length is given by
*Specification* section J2.2b(d). The actual length (12 in.) is less than 100
times the weld size (31.2 in.), so the effective length is equal to the actual
length.

The effective throat is shown in the figure below.

![A figure showing the effective throat.](../assets/placeholder.png)

Calculate the effective area of a single weld.

$$ \begin{align}
    A_{we} &= (\text{effective throat})(\text{effective length}) \\
           &= \left[(\tfrac{1}{4}~\rm{in.}) \cos{45^\circ}\right] (12~\rm{in.}) \\
           &= 2.65~\rm{in.}^2
\end{align} $$

Calculate the nominal strength of the weld group.

$$ \begin{align}
    R_n &= 4 F_{nw} A_{we} \\
        &= 4 (0.60) (70~\rm{ksi}) (2.65~\rm{in.}^2) \\
        &= 445~\rm{kips}
\end{align} $$

Calculate the design strength by applying the resistance factor.

$$ \phi R_n = 0.75 (445~\rm{kips}) \boxed{= 334~\rm{kips}} $$


Base metal -- HSS ([model](#Base-metal-(HSS)))
-----------------

The base metal limit state checks for failure of the welded elements at the weld
interface. For the HSS, there is a small amount of material in tension. This
area is quite small relative to the shear area, however, and it is common to
neglect it. Since the tensile contribution is being neglected, the limit state
being checked is shear (section J4.2) instead of block shear (section J4.3).

### Shear yielding

Calculate the gross shear area $A_{gv}$.

$$ \begin{align}
    A_{gv} &= 4 t_{des} \ell \\
           &= 4 (0.375~\rm{in.}) (12~\rm{in.}) \\
           &= 18.0~\rm{in.}
\end{align} $$

Calculate the nominal shear yielding strength using *Specification* equation
J4-3.

$$ \begin{align}
    R_n &= 0.60 F_y A_{gv} \\
        &= 0.60 (50~\rm{ksi}) (18.0~\rm{in.}) \\
        &= 540~\rm{kips}
\end{align} $$

Calculate the design strength by applying the resistance factor.

$$ \phi R_n = 1.0 (540~\rm{kips}) = 540~\rm{kips} $$

### Shear rupture

For the shear planes being considered, the net shear area is equal to the gross
shear area.

$$ A_{nv} = 18.0~\rm{in.} $$

Calculate the nominal shear rupture strength using *Specification* equation
J4-4.

$$ \begin{align}
    R_n &= 0.60 F_u A_{nv} \\
        &= 0.60 (65~\rm{ksi}) (18.0~\rm{in.}) \\
        &= 702~\rm{kips}
\end{align} $$

Calculate the design strength by applying the resistance factor.

$$ \phi R_n = 0.75 (702~\rm{kips}) = 526~\rm{kips} $$

Shear rupture controls the base metal limit state for the HSS member.

$$ \boxed{\phi R_n = 405~\rm{kip}} $$


Base metal -- plate ([model](#Base-metal-(plate)))
-------------------

The base metal limit state checks for failure of the welded elements at the weld
interface. For the gusset plate, this is a block shear failure and
*Specification* J4.3 applies. No material is removed from the plate to make the
connection, so the net and gross shear areas are the same.

Calculate the gross shear area.

$$ \begin{align}
    A_{gv} &= 2 (\tfrac34~\rm{in.}) (12~\rm{in.}) \\
           &= 18.0~\rm{in.}^2
\end{align} $$

Calculate the net tensile area.

$$ \begin{align}
    A_{nt} &= (\tfrac34~\rm{in.}) (6~\rm{in.}) \\
           &= 4.50~\rm{in.}^2
\end{align} $$

Calculate the nominal block shear strength using *Specification* equation J4-5.
The tension stress is uniform, so $U_{bs} = 1.0$.

$$ \begin{align}
    R_n &= 0.60 F_y A_{gv} + U_{bs} F_u A_{nt} \\
        &= 0.60 (50~\rm{ksi}) (18.0~\rm{in.}^2) + (65~\rm{ksi}) (4.50~\rm{in.}^2) \\
        &= 832~\rm{kips}
\end{align} $$

Calculate the design strength by applying the resistance factor.

$$ \phi R_n = 0.75 (832~\rm{kips}) \boxed{= 624~\rm{kips}} $$


Summary
-------

The design strength of the connection is summarized in the following table.

: Tensile limit state summary

| Limit state        | Design strength |
|:-------------------|----------------:|
| Tensile Yield      |        364 kips |
| Tensile Rupture    |        308 kips |
| Weld Fracture      |        334 kips |
| Base Metal - HSS   |        526 kips |
| Base Metal - Plate |        624 kips |

**Tensile rupture of the HSS controls with a design strength of 308 kips.**