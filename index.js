(function() {
    var $animate, $container, $message, $paragraph, MESSAGES, animate, initialise, scramble;

    MESSAGES = [];

    MESSAGES.push({
        delay: 0,
        text: "Incoming transmission..."
    });

    MESSAGES.push({
        delay: 1200,
        text: "Whatever this world can give to me"
    });

    MESSAGES.push({
        delay: 2200,
        text: "It's you you're all I see"
    });

    MESSAGES.push({
        delay: 3600,
        text: "Ooh you make me live"
    });

    MESSAGES.push({
        delay: 5200,
        text: "I really love you"
    });

    $container = $("#container");

    $message = $("#message");

    $animate = $("#animate");

    $paragraph = null;

    scramble = function(element, text, options) {
        var $element, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, j, k, letter, object, order, output, parameters, ref, results, settings, shuffle, target, textCharacters, textLength, wrap;
        defaults = {
            probability: 0.2,
            glitches: '-|/\\',
            blank: '',
            duration: text.length * 40,
            ease: 'easeInOutQuad',
            delay: 0.0
        };
        $element = $(element);
        settings = $.extend(defaults, options);
        shuffle = function() {
            if (Math.random() < 0.5) {
                return 1;
            } else {
                return -1;
            }
        };
        wrap = function(text, classes) {
            return "<span class=\"" + classes + "\">" + text + "</span>";
        };
        glitchText = settings.glitches;
        glitchCharacters = glitchText.split('');
        glitchLength = glitchCharacters.length;
        glitchProbability = settings.probability;
        glitches = (function() {
            var j, len, results;
            results = [];
            for (j = 0, len = glitchCharacters.length; j < len; j++) {if (window.CP.shouldStopExecution(1)){break;}
                letter = glitchCharacters[j];
                results.push(wrap(letter, 'glitch'));
            }
            window.CP.exitedLoop(1);

            return results;
        })();
        ghostText = $element.text();
        ghostCharacters = ghostText.split('');
        ghostLength = ghostCharacters.length;
        ghosts = (function() {
            var j, len, results;
            results = [];
            for (j = 0, len = ghostCharacters.length; j < len; j++) {if (window.CP.shouldStopExecution(2)){break;}
                letter = ghostCharacters[j];
                results.push(wrap(letter, 'ghost'));
            }
            window.CP.exitedLoop(2);

            return results;
        })();
        textCharacters = text.split('');
        textLength = textCharacters.length;
        order = (function() {
            results = [];
            for (var j = 0; 0 <= textLength ? j < textLength : j > textLength; 0 <= textLength ? j++ : j--){if (window.CP.shouldStopExecution(3)){break;} results.push(j); }
            window.CP.exitedLoop(3);

            return results;
        }).apply(this).sort(this.shuffle);
        output = [];
        for (i = k = 0, ref = textLength; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {if (window.CP.shouldStopExecution(4)){break;}
            glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
            glitchCharacter = glitches[glitchIndex];
            ghostCharacter = ghosts[i] || settings.blank;
            addGlitch = Math.random() < glitchProbability;
            character = addGlitch ? glitchCharacter : ghostCharacter;
            output.push(character);
        }
        window.CP.exitedLoop(4);

        object = {
            value: 0
        };
        target = {
            value: 1
        };
        parameters = {
            duration: settings.duration,
            ease: settings.ease,
            step: function() {
                var index, l, progress, ref1;
                progress = Math.floor(object.value * (textLength - 1));
                for (i = l = 0, ref1 = progress; 0 <= ref1 ? l <= ref1 : l >= ref1; i = 0 <= ref1 ? ++l : --l) {if (window.CP.shouldStopExecution(5)){break;}
                    index = order[i];
                    output[index] = textCharacters[index];
                }
                window.CP.exitedLoop(5);

                return $element.html(output.join(''));
            },
            complete: function() {
                return $element.html(text);
            }
        };
        return $(object).delay(settings.delay).animate(target, parameters);
    };

    animate = function() {
        var data, element, index, j, len, options;
        for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {if (window.CP.shouldStopExecution(6)){break;}
            data = MESSAGES[index];
            element = $paragraph.get(index);
            element.innerText = '';
            options = {
                delay: data.delay
            };
            scramble(element, data.text, options);
        }
        window.CP.exitedLoop(6);

    };

    initialise = function() {
        var index, j, len, text;
        $animate.click(animate);
        for (index = j = 0, len = MESSAGES.length; j < len; index = ++j) {if (window.CP.shouldStopExecution(7)){break;}
            text = MESSAGES[index];
            $message.append("<p>");
        }
        window.CP.exitedLoop(7);

        $paragraph = $container.find("p");
        animate();
    };

    initialise();

}).call(this);
