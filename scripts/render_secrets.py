from PIL import Image, ImageDraw, ImageFont

font = ImageFont.truetype('../assets/arial.ttf', 60)

images = [
    Image.new('RGB', (261, 257), 'white'),
    Image.new('RGB', (261, 257), 'white'),
    Image.new('RGB', (261, 257), 'white')
]

draws = [
    ImageDraw.Draw(images[0]),
    ImageDraw.Draw(images[1]),
    ImageDraw.Draw(images[2])
]

for (i, draw) in enumerate(draws):
    draw.regular_polygon((130, 128, 128), 6, 90, 'white', 'black', 6)
    draw.polygon([(130, 0), (240, 130), (130, 256), (20, 130)], 'white', 'black', 6)
    draw.polygon([(130, 0), (185, 130), (130, 256), (75, 130)], 'white', 'black', 6)
    draw.text((130, 130), str(i + 1), 'black', font=font, anchor='mm')

images[0].save('Secret_1.png')
images[1].save('Secret_2.png')
images[2].save('Secret_3.png')