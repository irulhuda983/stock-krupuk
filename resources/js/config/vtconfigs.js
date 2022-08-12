import Id from "vue-tailwind/dist/l10n/id";

import {
    TInput,
    TTextarea,
    TSelect,
    // TRadio,
    // TCheckbox,
    // TButton,
    // TInputGroup,
    // TCard,
    // TAlert,
    TModal,
    // TDropdown,
    TRichSelect,
    TPagination,
    // TTag,
    // TRadioGroup,
    // TCheckboxGroup,
    // TTable,
    TDatepicker,
    // TToggle,
    // TDialog,
  } from 'vue-tailwind/dist/components';

  const vtconfigs = {
    't-input': {
      component: TInput,
      props: {
        fixedClasses: 'text-xs block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
        classes: 'text-xs text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
        variants: {
          danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
          success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
        }
      }
    },
    't-textarea': {
      component: TTextarea,
    },
    't-select': {
      component: TSelect,
    },
    't-rich-select': {
      component: TRichSelect,
      props: {
        fixedClasses: {
          wrapper: 'relative',
          buttonWrapper: 'inline-block relative w-full',
          selectButton: 'text-xs w-full flex text-left justify-between items-center px-3 py-2 text-black transition duration-100 ease-in-out border rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
          selectButtonLabel: 'text-xs block truncate',
          selectButtonPlaceholder: 'block truncate',
          selectButtonIcon: 'fill-current flex-shrink-0 ml-1 h-3 w-3',
          selectButtonClearButton: 'text-xs rounded flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-6 w-6 transition duration-100 ease-in-out',
          selectButtonClearIcon: 'fill-current h-3 w-3',
          dropdown: 'text-xs absolute w-full z-10 -mt-1 absolute border-b border-l border-r rounded-b shadow-sm z-10',
          dropdownFeedback: '',
          loadingMoreResults: '',
          optionsList: 'text-xs overflow-auto',
          searchWrapper: 'text-xs inline-block w-full',
          searchBox: 'text-xs inline-block w-full',
          optgroup: '',
          option: 'text-xs cursor-pointer',
          disabledOption: 'text-xs opacity-50 cursor-not-allowed',
          highlightedOption: 'cursor-pointer',
          selectedOption: 'bg-blue-400 text-xs cursor-pointer',
          selectedHighlightedOption: 'bg-blue-400 cursor-pointer',
          optionContent: '',
          optionLabel: 'truncate block',
          selectedIcon: 'fill-current h-4 w-4',
          enterClass: '',
          enterActiveClass: '',
          enterToClass: '',
          leaveClass: '',
          leaveActiveClass: '',
          leaveToClass: ''
        },
        classes: {
          wrapper: '',
          buttonWrapper: '',
          selectButton: 'text-xs border-gray-300',
          selectButtonLabel: '',
          selectButtonPlaceholder: 'text-gray-400',
          selectButtonIcon: 'text-gray-600',
          selectButtonClearButton: 'hover:bg-blue-100 text-gray-600',
          selectButtonClearIcon: '',
          dropdown: 'bg-white border-gray-300',
          dropdownFeedback: 'pb-2 px-3 text-gray-400 text-xs',
          loadingMoreResults: 'pb-2 px-3 text-gray-400 text-xs',
          optionsList: '',
          searchWrapper: 'p-2 placeholder-gray-400',
          searchBox: 'px-3 py-2 bg-gray-50 text-xs rounded border focus:outline-none focus:shadow-outline border-gray-300',
          optgroup: 'text-gray-400 uppercase text-xs py-1 px-2 font-semibold',
          option: '',
          disabledOption: '',
          highlightedOption: 'bg-blue-100',
          selectedOption: 'font-semibold bg-blue-400 font-semibold text-white',
          selectedHighlightedOption: 'font-semibold bg-blue-400 font-semibold text-white',
          optionContent: 'flex justify-between items-center px-3 py-2',
          optionLabel: '',
          selectedIcon: '',
          enterClass: 'opacity-0',
          enterActiveClass: 'transition ease-out duration-100',
          enterToClass: 'opacity-100',
          leaveClass: 'opacity-100',
          leaveActiveClass: 'transition ease-in duration-75',
          leaveToClass: 'opacity-0'
        },
        variants: {
          danger: {
            selectButton: 'border-red-300 bg-red-50 text-red-900',
            selectButtonPlaceholder: 'text-red-200',
            selectButtonIcon: 'text-red-500',
            selectButtonClearButton: 'hover:bg-red-200 text-red-500',
            dropdown: 'bg-red-50 border-red-300'
          },
          success: {
            selectButton: 'border-green-300 bg-green-50 text-green-900',
            selectButtonIcon: 'text-green-500',
            selectButtonClearButton: 'hover:bg-green-200 text-green-500',
            dropdown: 'bg-green-50 border-green-300'
          }
        }
      }
    },
    't-datepicker': {
      component: TDatepicker,
      props: {
        locales: {
          id: Id,
        },
        fixedClasses: {
          navigator: 'flex',
          navigatorViewButton: 'flex items-center',
          navigatorViewButtonIcon: 'flex-shrink-0 h-5 w-5',
          navigatorViewButtonBackIcon: 'flex-shrink-0 h-5 w-5',
          navigatorLabel: 'flex items-center py-1',
          navigatorPrevButtonIcon: 'h-4 w-4 inline-flex',
          navigatorNextButtonIcon: 'h-4 w-4 inline-flex',
          inputWrapper: 'relative',
          viewGroup: 'inline-flex flex-wrap',
          view: 'w-64',
          calendarDaysWrapper: 'grid grid-cols-7',
          calendarHeaderWrapper: 'grid grid-cols-7',
          monthWrapper: 'grid grid-cols-4',
          yearWrapper: 'grid grid-cols-4',
          input: 'block w-full pl-10 px-3 text-xs py-2 transition duration-100 ease-in-out rounded-lg shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
          clearButton: 'flex flex-shrink-0 items-center justify-center absolute right-0 top-0 m-2 h-4 w-4',
          clearButtonIcon: 'fill-current h-3 w-3'
        },
        classes: {
          wrapper: 'flex flex-col',
          dropdownWrapper: 'relative z-10',
          dropdown: 'origin-top-left absolute rounded shadow bg-white overflow-hidden mt-1',
          enterClass: 'opacity-0 scale-95',
          enterActiveClass: 'transition transform ease-out duration-100',
          enterToClass: 'opacity-100 scale-100',
          leaveClass: 'opacity-100 scale-100',
          leaveActiveClass: 'transition transform ease-in duration-75',
          leaveToClass: 'opacity-0 scale-95',
          inlineWrapper: '',
          inlineViews: 'rounded bg-white border mt-1 inline-flex',
          inputWrapper: '',
          input: 'text-black placeholder-gray-400 border-gray-300',
          clearButton: 'hover:bg-gray-100 rounded transition duration-100 ease-in-out text-gray-600',
          clearButtonIcon: '',
          viewGroup: '',
          view: '',
          navigator: 'pt-2 px-3',
          navigatorViewButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer rounded-full px-2 py-1 -ml-1 hover:bg-gray-100',
          navigatorViewButtonIcon: 'fill-current text-gray-400',
          navigatorViewButtonBackIcon: 'fill-current text-gray-400',
          navigatorViewButtonMonth: 'text-gray-700 font-semibold',
          navigatorViewButtonYear: 'text-gray-500 ml-1',
          navigatorViewButtonYearRange: 'text-gray-500 ml-1',
          navigatorLabel: 'py-1',
          navigatorLabelMonth: 'text-gray-700 font-semibold',
          navigatorLabelYear: 'text-gray-500 ml-1',
          navigatorPrevButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 ml-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed',
          navigatorNextButton: 'transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-100 rounded-full p-1 -mr-1 disabled:opacity-50 disabled:cursor-not-allowed',
          navigatorPrevButtonIcon: 'text-gray-400',
          navigatorNextButtonIcon: 'text-gray-400',
          calendarWrapper: 'px-3 pt-2',
          calendarHeaderWrapper: '',
          calendarHeaderWeekDay: 'uppercase text-xs text-gray-500 w-8 h-8 flex items-center justify-center',
          calendarDaysWrapper: '',
          calendarDaysDayWrapper: 'w-full h-8 flex flex-shrink-0 items-center',
          otherMonthDay: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
          emptyDay: '',
          inRangeFirstDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-l-full',
          inRangeLastDay: 'text-sm bg-blue-500 text-white w-full h-8 rounded-r-full',
          inRangeDay: 'text-sm bg-blue-200 w-full h-8 disabled:opacity-50 disabled:cursor-not-allowed',
          selectedDay: 'text-sm rounded-full w-8 h-8 mx-auto bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed',
          activeDay: 'text-sm rounded-full bg-blue-100 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
          highlightedDay: 'text-sm rounded-full bg-blue-200 w-8 h-8 mx-auto disabled:opacity-50 disabled:cursor-not-allowed',
          day: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed',
          today: 'text-sm rounded-full w-8 h-8 mx-auto hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed border border-blue-500',
          monthWrapper: 'px-3 pt-2',
          selectedMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
          activeMonth: 'text-sm rounded w-full h-12 mx-auto bg-blue-100',
          month: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
          yearWrapper: 'px-3 pt-2',
          year: 'text-sm rounded w-full h-12 mx-auto hover:bg-blue-100',
          selectedYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-500 text-white',
          activeYear: 'text-sm rounded w-full h-12 mx-auto bg-blue-100'
        },
        variants: {
          danger: {
            input: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
            clearButton: 'hover:bg-red-200 text-red-500'
          }
        }
      }
    },

    // pagination
    't-pagination': {
      component: TPagination,
      props: {
        classes: {
          wrapper: 'table border-collapse text-center bg-white mx-auto shadow-sm',
          element: 'w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 border border-gray-200 table-cell hover:border-orange-100',
          activeElement: 'w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 border border-gray-200 border-orange-500 table-cell hover:border-orange-600',
          disabledElement: 'w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 border border-gray-200 table-cell',
          ellipsisElement: 'w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 border border-gray-200 hidden md:table-cell',
          activeButton: 'bg-orange-500 w-full h-full text-white hover:bg-orange-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-orange-500 focus:outline-none focus:ring-opacity-50',
          disabledButton: 'opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out',
          button: 'hover:bg-orange-100 w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-orange-500 focus:outline-none focus:ring-opacity-50',
          ellipsis: ''
        },
        variants: {
          rounded: {
            wrapper: 'bg-white mx-auto text-center flex space-x-2',
            element: 'w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 rounded-full',
            activeElement: 'w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 rounded-full',
            disabledElement: 'w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 rounded-full',
            ellipsisElement: 'w-4 h-4 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 rounded-full hidden md:inline',
            activeButton: 'border border-orange-500 bg-orange-500 w-full h-full rounded-full text-white hover:bg-orange-600 transition duration-100 ease-in-out focus:ring-2 focus:ring-orange-500 focus:outline-none focus:ring-opacity-50',
            disabledButton: 'border border-gray-200  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out',
            button: 'border border-gray-200 hover:bg-orange-100 hover:border-orange-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-2 focus:ring-orange-500 focus:outline-none focus:ring-opacity-50',
            ellipsis: ''
          }
        }
      }
    },

    // modal
    't-modal': {
      component: TModal,
      props: {
        fixedClasses: {
          overlay: 'z-40  overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
          wrapper: 'relative mx-auto z-50 max-w-lg px-3 py-12',
          modal: 'overflow-visible relative rounded z-50',
          body: 'p-3',
          header: 'border-b p-3 rounded-t',
          footer: ' p-3 rounded-b',
          close: 'flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50'
        },
        classes: {
          overlay: 'bg-black',
          wrapper: '',
          modal: 'bg-white shadow z-50',
          body: 'p-3',
          header: 'border-gray-100',
          footer: 'bg-gray-100',
          close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          closeIcon: 'fill-current h-4 w-4',
          overlayEnterClass: 'opacity-0',
          overlayEnterActiveClass: 'transition ease-out duration-100',
          overlayEnterToClass: 'opacity-100',
          overlayLeaveClass: 'opacity-100',
          overlayLeaveActiveClass: 'transition ease-in duration-75',
          overlayLeaveToClass: 'opacity-0',
          enterClass: '',
          enterActiveClass: '',
          enterToClass: '',
          leaveClass: '',
          leaveActiveClass: '',
          leaveToClass: ''
        },
        variants: {
          danger: {
            overlay: 'bg-red-100',
            header: 'border-red-50 text-red-700',
            close: 'bg-red-50 text-red-700 hover:bg-red-200 border-red-100 border',
            modal: 'bg-white border border-red-100 shadow-lg',
            footer: 'bg-red-50'
          }
        }
      }
    },

  }

export default vtconfigs;