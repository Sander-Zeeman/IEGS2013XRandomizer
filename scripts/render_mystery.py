from PIL import Image, ImageDraw, ImageFont

font = ImageFont.truetype('../assets/arial.ttf', 60)

image = Image.new('RGB', (261, 257), 'white')
draw = ImageDraw.Draw(image)
draw.regular_polygon((130, 128, 128), 6, 90, 'white', 'black', 6)
draw.polygon([(130, 0), (240, 130), (130, 256), (20, 130)], 'white', 'black', 6)
draw.polygon([(130, 0), (185, 130), (130, 256), (75, 130)], 'white', 'black', 6)
draw.text((130, 130), '?', 'black', font=font, anchor='mm')

image.save('Mystery.png')