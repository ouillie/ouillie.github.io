---
title: 'Why is there no B#?'
layout: post
date: 2023-08-07
---

Western music involves twelve discreet tones.
Why?

For reasons I won't delve into deeply,
consonance occurs when two tones are both *harmonics*
of a nearby (hypothetical) base tone,
and since twelve is the smallest [abundant number],
its a good choice for producing many possible consonant pairs.

[abundant number]: https://en.wikipedia.org/wiki/Abundant_number

To create a chromatic scale,
start with a base frequency,
and pick all the notes with frequencies that are
an integer number of multiples from the base.
In Western music, the base frequency is generally cited as *A4* (`440` Hz),
and the multiple is `2^(1/12)`, giving:

| Note   |           Formula | Frequency (Hz) |
| :----- | ----------------: | -------------: |
| *G4*   | `440 * 2^(-2/12)` |       `391.99` |
| *Ab4*  | `440 * 2^(-1/12)` |       `415.30` |
| *A4*   |  `440 * 2^(0/12)` |       `   440` |
| *Bb4*  |  `440 * 2^(1/12)` |       `466.16` |
| *B4*   |  `440 * 2^(2/12)` |       `493.88` |
| *C4*   |  `440 * 2^(3/12)` |       `523.25` |
| *C#4*  |  `440 * 2^(4/12)` |       `554.37` |

and continuing infinitely in both directions.
The step size of `2^(1/12)` means the frequency doubles
every twelve steps,
no matter where you start from.
`A` happens to be the only note with an integer frequency in each octave,
but that's not very important.

This is the chromatic scale.
It is an example of automorphism;
the whole (infinite) scale can be shifted up or down any number of discreet steps
and the resulting scale of frequencies is identical to the original.

Generally, a melody will restrict itself to only a subset of the notes in the chromatic scale,
This restriction is the *key* of the song, e.g. A major,
and corresponds to a melodic scale.

Here are the eight notes of an A major scale:

| Note   |           Formula | Frequency (Hz) |
| :----- | ----------------: | -------------: |
| *A*    |  `440 * 2^(0/12)` |          `440` |
| *B*    |  `440 * 2^(2/12)` |       `493.88` |
| *C#*   |  `440 * 2^(4/12)` |       `554.37` |
| *D*    |  `440 * 2^(5/12)` |       `587.32` |
| *E*    |  `440 * 2^(7/12)` |       `659.25` |
| *F#*   |  `440 * 2^(9/12)` |       `739.98` |
| *G#*   | `440 * 2^(11/12)` |       `830.60` |
| *A*    | `440 * 2^(12/12)` |          `880` |

Technically, this is considered a *heptatonic* scale of seven notes,
but by repeating the base tone A,
it can be played like a sort of proto-melody
in 2 bars of *common time* (4/4) quarter-notes,
so it's often thought of as having eight notes.

The step sizes between notes are 2, 2, 1, 2, 2, 2, 1.
A non-uniform step size makes a melodic scale more interesting than the chromatic scale,
but it also means it lacks its automorphism.
Whereas the chromatic scale could shift up or down any number of notes within itself and remain chromatic,
the (infinitely extended) heptatonic major scales will only remain major scales
if shifted up or down a multiple of eight notes; an *octave*.
Shifting down by two notes (within the scale), for instance, produces the relative minor.

Not all melodic scales are heptatonic. There's also pentatonic (5 notes), blues (usually 6 notes),
or any other scale anybody has ever invented,
but early Western musicians seem to have dwealt particularly long on the heptatonic ones;
so much so, that they fashioned the keys of the piano after it.
The step sizes between the white keys of the piano are 2, 2, 1, 2, 2, 2, 1.

Throw in the black keys as well, and the piano is chromatic.
As a general-purpose musical instrument, it must be.
But, the arrangement of the keys suggest
it was not always thought of in such general terms.
It was seemingly designed with heptatonic scales in mind.

Why does that matter?
