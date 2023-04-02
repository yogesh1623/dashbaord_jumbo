import COLORS from "../../../constants/color"

export const styles = {
    cardContainer : { width: 'fit-content', padding: '1rem 1.5rem' },
    cardHeader : { display: 'flex', justifyContent: 'space-between' },
    title : { marginBottom: '2rem', fontWeight: '400', color: COLORS.grey, fontSize: '13px' },
    btn : { color: COLORS.purple1, fontSize: '13px' }
}

export const productListStyle = {
    bgImg: { borderRadius: '8px', marginRight: '0.8rem', width: '6.5rem', height: '6.5rem' },
    title: { fontSize: '12px', fontWeight: '400', margin: '0.4rem 0px 0.6rem', color: COLORS.black1 },
    actualPrice: { fontSize: '12px', fontWeight: '400', textDecoration: 'line-through', marginRight: '0.8rem', color: COLORS.grey },
    discountedPrice : { fontSize: '12px', fontWeight: '400' }
}