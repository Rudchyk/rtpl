(function($) {
  var global = {
    inactiveClass: 'has-inactive',
    activeClass: 'has-active',
    valueClass: 'has-value',
    disabledClass: 'has-disabled'
  };

  /*field function*/
  $.fn.fieldJS = function() {
    return this.each(function() {
      var $this = $(this),
          $ThisDisabled = $this.hasClass(global.disabledClass),
          $child = $this.children('input'),
          $childVal = $child.val();

      if ($childVal) {
        $this.addClass(global.valueClass);
      }

      if ($ThisDisabled) {
        $child
          .attr('disabled', 'disabled');
      } else {
        $child
          .attr('disabled', false)
          .on('focus', function() {
            $(this)
              .parent()
                .addClass(global.activeClass);
          })
          .on('blur', function() {
            $(this)
              .parent()
                .removeClass(global.activeClass);
          })
          .on('change', function() {
            var $el = $(this),
                $elVal = $el.val(),
                $elParent = $el.parent();

            if ($elVal) {
              $elParent
                .addClass(global.valueClass);
            } else {
              $elParent
                .removeClass(global.valueClass);
            }
          });
      }

    });
  };

  /*select function*/
  selectJS = function() {
    this._init = function(element, options) {
      var defaults = {
        el: $(element),
        slctDropClass: 'slctdrop',
        slctDropListClass: 'slctdrop-list',
        slctDropItemClass: 'slctdrop-item',
        fieldBoxClass: 'field-box',
        hideClass: 'hide',
        fakeFieldClass: 'field-fake',
        workSelectClass: 'field-hidden',
        userScrollClass: 'scroll-simple_inner',
        userBrowser: /Android|webOS|iPhone|iPad|iPod|BlackBerry/i,
        userScroll: false,
        spanClass: 'class'
      },
      settings = $.extend(defaults, options),
      $elDisabled = settings.el.hasClass(global.disabledClass),
      $elSelect = settings.el.find('select'),
      $fakeField = settings.el.find('.' + settings.fakeFieldClass),
      $elVal = $elSelect.val(),
      $elText = $elSelect.find('option:selected').text(),
      $elClass = $elSelect.find('option:selected').data('mclass') || settings.spanClass,
      $elAltValue = $elSelect.find('option:selected').data('altvalue') || $elText,
      $options = $elSelect.find('option'),
      $slctDrop = $('<div class="' + settings.slctDropClass + ' ' + settings.slctDropClass + '-js"></div>'),
      $list = $('<ul class="' + settings.slctDropListClass + '"></ul>');

      $fakeField.html('<div class="' + settings.slctDropItemClass + '-inner ' + settings.slctDropItemClass + '-inner-' + $elClass + '">' + $elAltValue + '</div>');

      if (!$elVal) {
        settings.el.removeClass(global.activeClass);
      } else {
        $fakeField.html('<div class="' + settings.slctDropItemClass + '-inner ' + settings.slctDropItemClass + '-inner-' + $elClass + '">' + $elAltValue + '</div>');
        settings.el.addClass(global.valueClass);
      }

      if (!settings.userBrowser.test(navigator.userAgent)) {
        $options.each(function() {
          var $this = $(this),
              $optionVal = $this.val(),
              $optionText = $this.text(),
              $optionClass = $this.data('mclass') || settings.spanClass,
              $optionAltValue = $this.data('altvalue') || $optionText,
              $optionLi = $('<li class="' + settings.slctDropItemClass + ' ' + settings.slctDropItemClass + '-js" data-option="' + $optionVal + '" data-altvalue="' + $optionAltValue + '"><div class="' + settings.slctDropItemClass + '-inner ' + settings.slctDropItemClass + '-inner-' + $optionClass + '">' + $optionText + '</div></li>');

          if (!$this.is(':disabled')) {
            if ($elText == $optionText) {
              $optionLi.addClass(settings.hideClass);
            };
            $list.append($optionLi);
          };
        });
        $slctDrop.prepend($list);
        $elSelect
          .hide()
          .before($slctDrop);

        $list.addClass('default-scroll');

        if ($elDisabled) {
          $elSelect
            .attr('disabled', 'disabled')
          $fakeField
            .off('click');
        } else {
          $elSelect
            .attr('disabled', false);

          settings.el
            .on('click', '.' + settings.fakeFieldClass, function() {
              var $fakeEl = $(this),
                  $elParent = $fakeEl.closest('.' + settings.fieldBoxClass);

              $('.' + settings.slctDropClass + '-js').hide();
              $('.' + settings.fakeFieldClass).removeClass(global.activeClass);
              $elParent
                .addClass(global.activeClass)
                .find('.' + settings.slctDropClass + '-js').slideToggle();
            })
            .on('click', '.' + settings.slctDropItemClass + '-js', function() {
              var $item = $(this),
                  $itemel = $item.closest('.' + settings.fieldBoxClass),
                  $itemField = $itemel.find('.' + settings.fakeFieldClass),
                  $itemSelect = $itemel.find('select'),
                  $itemText = $item.html(),
                  $itemOption = $item.data('option');
                  $itemAltVal = $item.data('altvalue');

              $itemel
                .removeClass(global.activeClass)
                .addClass(global.valueClass)
                .find('.' + settings.slctDropClass + '-js').slideToggle();
              $itemField
                .html($itemText)
                .children()
                .text($itemAltVal);
              $itemSelect.val($itemOption);
              $itemel.find('.' + settings.slctDropItemClass + '-js').removeClass(settings.hideClass);
              $item.addClass(settings.hideClass);
            });
        }

        $(document).click(function(event) {
          var e = $(event.target).closest('.' + settings.fieldBoxClass).length;
          if (!e) {
            settings.el
              .removeClass(global.activeClass)
              .find('.' + settings.slctDropClass + '-js')
              .hide();
            if (!$elSelect.val()) {
              $elSelect
                .removeClass(global.valueClass);
            };
          };
        });

      } else {
        if ($elDisabled) {
          $elSelect
            .attr('disabled', 'disabled')
        } else {
          $elSelect
            .attr('disabled', false);

          $elSelect.on('change', function() {
            var $thisVal = $(this).val();

            $fakeField.text($thisVal);
            settings.el.addClass(global.activeClass);
          });
        }
      }

    };
  };
  // Launch plugin
  $.fn.selectJS = function(options) {
    return this.each(function() {
      $(this).data('selectJS', new selectJS()._init(this, options));
    });
  };

  /*radio function*/
  $.fn.radioJS = function() {
    return this.each(function() {
      var $this =  $(this),
          $thisDisabled =  $this.hasClass(global.disabledClass),
          $radioClass = '.radio-js',
          $radioActiveClass = $radioClass + '.' + global.activeClass,
          $radio = $this.find($radioClass),
          $radioVal = $radio.data('rval'),
          $radioText = $radio.text(),
          $radioActive = $this.find($radioActiveClass),
          $radioActiveVal = $radioActive.data('rval'),
          $radioActiveText = $radioActive.text(),
          $radioInputClass = 'input:hidden',
          $radioInput = $this.find($radioInputClass);

      if ($radioActiveVal) {
        $radioInput
          .val($radioActiveVal);
      } else {
        $radioInput
          .val($radioActiveText);
      }

      if ($thisDisabled) {
        $radioInput
          .attr('disabled', 'disabled');
        $radio
          .off('click');
      } else {
        $radioInput
          .attr('disabled', false);
        $radio
          .on('click', function() {
            var $el = $(this),
                $elParent = $el.parent(),
                $elWholeRadio = $elParent.find($radioClass),
                $elInput = $elParent.find($radioInputClass),
                $elVal = $el.data('rval'),
                $elText = $el.text();

            $elWholeRadio
              .removeClass(global.activeClass)
            $el
              .addClass(global.activeClass);

            if ($elVal) {
              $elInput
                .val($elVal);
            } else {
              $elInput
                .val($elText);
            }
          });
      }
    });
  };

  /*checkbox function*/
  $.fn.checkboxJS = function() {
    return this.each(function() {
        var $this = $(this),
            $thisDisabled = $this.hasClass(global.disabledClass),
            $thisActive = $this.hasClass(global.activeClass),
            $inputStr = 'input:checkbox',
            $input = $this.find($inputStr),
            $thisTextStr = '.check-text-js',
            $thisText = $this.find($thisTextStr),
            $thisTextVal = $thisText.text();

        if ($thisActive) {
          $input
            .val($thisTextVal)
            .attr('checked', true);
        }

        if ($thisDisabled) {
          $input
            .attr('disabled', 'disabled');
        } else {
          $input
            .attr('disabled', false)
            .on('change', function() {
              var $el = $(this),
                  $elParent = $el.parent(),
                  $elInput = $elParent.find($inputStr),
                  $elText = $elParent.find($thisTextStr),
                  $elTextVal = $elText.text();
              $elParent
                .toggleClass(global.activeClass);
              $elInput
                .val($elTextVal);
            });
        }
    });
  };

  /*file function*/
  $.fn.fileJS = function() {
    return this.each(function() {
      var $this = $(this),
          $thisDisabled = $this.hasClass(global.disabledClass),
          $thisInputStr = 'input:file',
          $thisBtnStr = '.btn',
          $thisFieldStr = '.field',
          $input = $this.children($thisInputStr),
          $btn = $this.children($thisBtnStr),
          $fakeField = $this.children($thisFieldStr);

      if ($thisDisabled) {
        $input
          .attr('disabled', 'disabled');
      } else {
        $input
          .attr('disabled', false);
        $btn
          .on('click', function() {
            $(this)
              .siblings($thisInputStr)
                .click()
                  .parent()
                    .addClass(global.activeClass);
          });
        $input
          .on('change', function() {
            var $this = $(this),
                $thisParent = $this.parent(),
                $thisVal = $this.val(),
                $thisField = $thisParent.find($thisFieldStr);

            $thisParent
                .removeClass(global.activeClass)
                .addClass(global.valueClass);

            if ($thisField.length) {
              $thisField
                .text($thisVal);
            };

          });
      }
    });
  };

  /*textareaJS function*/
  $.fn.textareaJS = function() {
    return this.each(function() {
      var $this = $(this),
          $thisDisabled = $this.hasClass(global.disabledClass),
          $fakeArea = $this.find('.field-fake-area-js'),
          $fakeAreaText = $fakeArea.text().trim(),
          $defaultText = $fakeArea.data('area-placeholder'),
          $input = $this.find('input');

      if ($fakeAreaText == '') {
        $this
          .addClass(global.inactiveClass);
        $fakeArea
          .text($defaultText);
      } else {
        $this
          .addClass(global.valueClass);
        $input
          .val($fakeAreaText);
      }

      if ($thisDisabled) {
        $fakeArea
          .attr('contenteditable', 'false');
        $input
          .attr('disabled', 'disabled');
      } else {
        $fakeArea
          .attr('contenteditable', 'true')
          .on('focus', function() {
            var $this = $(this),
                $thisText = $this.text(),
                $thisParent = $this.parent();

            if ($thisText == $defaultText) {
              $this
                .text('');
              $thisParent
                .removeClass(global.inactiveClass)
                .addClass(global.activeClass);
            }
          })
          .on('blur', function() {
            var $this = $(this)
                $thisText = $this.text();

            if ($thisText == '') {
              $this
                .text($defaultText)
                .parent()
                  .addClass(global.inactiveClass)
                  .removeClass(global.activeClass + ' ' + global.valueClass);
            } else {
              $this
                .parent()
                  .addClass(global.valueClass)
                  .removeClass(global.activeClass)
            }
          })
          .on('keyup', function() {
            var $this = $(this),
                $thisText = $this.text().trim(),
                $thisInput = $this.parent().find('input');

            $thisInput.val($thisText);
          });
        $input
          .attr('disabled', false);
      }
    });
  };

})($);
