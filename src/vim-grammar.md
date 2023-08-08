---
title: 'Vim Grammar'
layout: post
date: 2023-08-09
---

## Intro

[`vim`] is a text editor based on [`vi`],
which is really just [`ex`],
which is based on [`ed`],
and so forth.
But *Vim* is often referred to as a language.

[`vim`]: https://www.vim.org/
[`vi`]: https://ex-vi.sourceforge.net/
[`ex`]: https://ex-vi.sourceforge.net/ex.html
[`ed`]: https://en.wikipedia.org/wiki/Ed_(text_editor)

This is a partial, heavily interpreted grammar for the Vim language,
which is now used as an interface to [myriad programs] besides the original `vim`.
Vim is the closest thing to a *lingua franca* of linguistic editing and navigation,
available for nearly all text editors, [CLI], [browsers], even [`emacs`].
"Editing languages" have come before and after it,
some descending from it,
some perhaps objectively more powerful than it,
but Vim's ubiquity is a unique strength.
No other editing language comes close to its breadth of adoption and support.

[myriad programs]: https://github.com/erikw/vim-keybindings-everywhere-the-ultimate-list
[cli]: https://www.gnu.org/software/bash/manual/html_node/Readline-vi-Mode.html
[browsers]: https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb
[`emacs`]: https://evil.readthedocs.io/en/latest/overview.html

This is not a Vim tutorial.
It's probably most interesting if you've attempted Vim at least once,
or love grammar.

## Formalities

My attempt at a formal EBNF grammar,
using regular expressions enclosed in single quotes,
terminology mine:

```
sentence = normal-sentence
         | visual-sentence
         | 'q[a-z]' { sentence } 'q'

normal-sentence = reflexive-edit-verb
                | transitive-edit-verb noun
                | reflexive-insert-verb insertion
                | transitive-insert-verb noun insertion
                | motion

visual-sentence = mode-switch { noun } edit-verb
                | mode-switch { noun } insert-verb insertion
                | mode-switch { noun }

edit-verb = reflexive-edit-verb | transitive-edit-verb

insert-verb = reflexive-insert-verb | transitive-insert-verb

noun = motion
     | selection

motion = multiplier motion
       | '[hHjJkKlLwWeEbB0$^_G]'
       | 'g[jk]'

selection = '[ia][][)(}{><]'

reflexive-edit-verb = '[xX]'

reflexive-insert-verb = '[iIaAsS]'

transitive-edit-verb = '[xX]'

transitive-insert-verb = '[iIaAsS]'

multiplier = '0*[1-9][0-9]*'

mode-switch = '[vV]' | CTRL+V
```

It may be strange to see `motion` classed as a noun rather than a verb.
In Vim, every motion implicitly describes the selection (noun)
including all text between the *cursor* and the destination of the motion.
`motion` can be thought of as a special case of `selection`,
which generally acts like a sequence of two motions
(one to set the start cursor, and another to set the end cursor).
In the case of `motion`, the first one is skipped.
When a motion occurs by itself,
the implicit verb is to simply update the cursor position and leave the buffer unchanged.

## Mode

The Vim language can be thought of in two modes: *normal* and *visual*.
Users of the editor `vim` will be familiar with *insert* mode as well,
but that mode is grammarless; it is not a language.
This grammar attaches that whole "mode" to the *verb phrases* of the language.
`vim` also has a *command-line* mode,
which is really an independent language not covered here.

Normal and visual modes are pretty similar,
distinguished primarily by their word order.
Unsuprisingly, normal mode came first (from `vi`),
and it features VN (verb-noun) order.
Visual mode was added in `vim`,
with NV (noun-verb) order,
but is otherwise broadly similar.

Unlike natural language,
Vim has no need for subject-object distinction between nouns,
so none is made here.
Every noun refers to a *selection* of locations within a *buffer*,
and every verb is a command.
The "listener" (your editor, I suppose) could be thought of as the implicit subject,
and all nouns objects,
making each sentence in normal mode similar to a transitive English command.
Consider for example: "delete the next four words."
"Delete" is the verb, and "the next four words" is a *noun phrase* &mdash;
a unit of words that acts like a noun,
which is really what the N in VN means.
Much like in English,
noun phrases in Vim can be very complex.

So, why did `vim` add an alternative NV word order?
Noun phrases (which represent selections)
tend to be more complex and error-prone than verb phrases.
Putting the noun first supposedly makes it easier to visualize the selection
before executing the verb and mutating the buffer,
hence the name.
Some descendants of Vim, like [Kakoune],
are based on the perceived superior intuitiveness and expressivity of visual mode,
and seek to expand it.
Visual mode actually is a bit more expressive in Vim,
but that's not due to word order.
Visual mode makes semantic use of the *mode switch*
to mark the beginning of a sequence of nouns that iteratively defines the selection.
Normal mode lacks an equivalent delimiter,
and so must end the sentence after the first noun.
In theory,
both iterative definition and visualization could be achieved with VN order,
if such a delimiter were introduced.

[kakoune]: http://kakoune.org/

Notice how sentences in normal mode must discriminate between reflexive and transitive verbs,
whereas they are generalized in visual mode.
This relative grammatical simplicity is another advantage of the semantic mode switch.
So, why use normal mode anymore?
It always saves at least one keystroke (the mode switch).
