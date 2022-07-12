import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export function Question({ item }) {
    const disclosureContainerCSS =
        'my-6 shadow-lg shadow-cstmgray/50 bg-gradient-to-r from-cstmglass2 to-cstmglass rounded-lg';
    const disclosureButtonCSS =
        'flex justify-between w-full px-4 py-2 text-xs md:text-sm xl:text-base 2xl:text-lg font-gothammedium text-left focus:outline-none ';
    const disclosurePanelCSS =
        'px-4 pt-4 pb-2 text-xs xl:text-sm 2xl:text-base 2xl:text-lg font-gothambook';
    const openPanelChevronIconCSS = 'transform rotate-180';
    const ChevronIconCSS = 'w-5 h-5 text-cstmdarkergreen';

    return (
        <>
            <div className='px-4 md:px-24 lg:px-36 pt-12 md:pt-16 xl:pt-20'>
                <Disclosure as='div' className={disclosureContainerCSS}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={disclosureButtonCSS}>
                                <span>{item.question}</span>
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
                                    <span>{item.answer}</span>
                                </Disclosure.Panel>
                            )}
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    );
}
