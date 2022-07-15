import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export function Question({ item }) {
    const disclosureContainerCSS = 'my-2 bg-white rounded-lg items-center';
    const disclosureButtonCSSClose =
        'flex justify-between items-center w-full p-3 md:px-6 md:py-4 text-md md:text-[18px] font-gothammedium text-left focus:outline-none ';
    const disclosureButtonCSSOpen =
        'flex justify-between items-center w-full p-3 md:px-6 md:py-4 text-md md:text-[18px] font-gothammedium text-left focus:outline-none shadow-md';

    const disclosurePanelCSS =
        'p-3 md:px-6 md:py-4 pb-2 items-center text-sm md:text-[14px] font-gothambook';
    const openPanelChevronIconCSS = 'transform rotate-180';
    const ChevronIconCSS = 'w-5 h-5 md:w-7 md:h-7 text-cstmdarkergreen';

    return (
        <>
            <Disclosure as='div' className={disclosureContainerCSS}>
                {({ open }) => (
                    <>
                        <Disclosure.Button
                            className={
                                open
                                    ? disclosureButtonCSSOpen
                                    : disclosureButtonCSSClose
                            }
                        >
                            <div className='flex items-center'>
                                <span className='text-xl md:text-2xl mr-3 text-oranges-default'>
                                    Q
                                </span>
                                <span className='flex-grow'>
                                    {item.question}
                                </span>
                            </div>

                            <ChevronDownIcon
                                className={`${
                                    open ? openPanelChevronIconCSS : ''
                                } ${ChevronIconCSS}`}
                            />
                        </Disclosure.Button>
                        {open && (
                            <Disclosure.Panel
                                static
                                className={disclosurePanelCSS}
                            >
                                <div className='flex items-center'>
                                    <span className=' text-xl md:text-2xl mr-3 text-main-blue'>
                                        A
                                    </span>
                                    <span className='flex-grow'>
                                        {item.answer}
                                    </span>
                                </div>
                            </Disclosure.Panel>
                        )}
                    </>
                )}
            </Disclosure>
        </>
    );
}
