import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import wait from 'waait';
import Pagination, { PAGINATION_QUERY} from '../components/infos/Pagination';
import {MockedProvider} from 'react-apollo/test-utils';

function makeMocksFor(length){
    return [
        {
            request : { query: PAGINATION_QUERY},
            result : {
                data:{
                    faqsConnection: {
                        __typename: 'aggregate',
                        aggregate:{
                            __typename:'count',
                            count: length
                        }
                    }
                }
            }
        }
    ]
}

describe('<Pagination/>', () => {
    it('display things', () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(1)}>
                <Pagination page={1} />
            </MockedProvider>
        );
        const pagination = wrapper.find('[data-test="pagination"]')
        expect(wrapper.text()).toContain('Loading...')
        //expect(toJSON(pagination)).toMatchSnapshot();
        //console.log(wrapper.debug())
    })
    it('renders pagination for 15 actualities', async () => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(15)}>
                <Pagination page={1} />
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        expect(wrapper.find('.totalPages').text()).toEqual('3');
        const pagination = wrapper.find('[data-test="pagination"]')
        expect(toJSON(pagination)).toMatchSnapshot();
        //console.log(wrapper.debug())
    })
    it('disable previous button on first page',async() => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(15)}>
                <Pagination page={1} />
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        expect(wrapper.find('Button.precedentButton').prop('disabled')).toEqual(true)
        expect(wrapper.find('Button.suivantButton').prop('disabled')).toEqual(false)

    })
    it('disable next button on last page',async() => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(15)}>
                <Pagination page={3} />
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        expect(wrapper.find('Button.precedentButton').prop('disabled')).toEqual(false)
        expect(wrapper.find('Button.suivantButton').prop('disabled')).toEqual(true)
    })
    it('enable all buttons on middle page',async() => {
        const wrapper = mount(
            <MockedProvider mocks={makeMocksFor(15)}>
                <Pagination page={2} />
            </MockedProvider>
        );
        await wait();
        wrapper.update();
        expect(wrapper.find('Button.precedentButton').prop('disabled')).toEqual(false)
        expect(wrapper.find('Button.suivantButton').prop('disabled')).toEqual(false)
    })
})